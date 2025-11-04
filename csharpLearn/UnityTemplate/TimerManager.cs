public class MonoBehavior;

public interface ITimer{
    float Duration {get;}
    float Elapsed {get;}
    bool IsCompleted {get;}

    void Cancel();
    void Pause();
    void Resume();
}

pulic class Timer: ITimer{
    private float duration;
    private float elapsed;
    private bool isLoop;
    private bool isCancelled;
    private bool isPaused;
    private Action callback;

    public float Duration => duration;
    public float Elapsed => elapsed;
    public bool IsCompleted => isCancelled || (!isLoop && elapsed >= duration);

    public void Init(float delay, Action cb, bool loop){
        duration = delay;
        callback = cb;
        isLoop = loop;
        elapsed = 0f;
        isPaused = false;
        isCancelled = false;
    }

    public void Update(float delta){
        if(IsCompleted || isPaused) return;
        elapsed += delta;
        if(elapsed >= duration){
            callback?.invoke();
            if(isLoop) elapsed = 0f;
            else{
                isCancelled = true;
                TimerManager.Instance?.Recycle(this);
            }
        }
    }

    public void Cancel(){
        isCancelled = true;
        TimerManager.Instance?.Recycle(this);
    }

    public void Pause() => isPaused = true;
    public void Resume() => isPaused = false;
}

public TimerManager: MonoBehavior{
    // 静态单例
    public static TimerManager Instance;

    private readonly List<Timer> timers = new();
    private readonly Queue<Timer> toAdd = new();
    private readonly Stack<Timer> pool = new();

    #region LifeCycle
    void Awake() => Instance = this;

    void Update(){
        foreach(var timer in timers)
            timer.Update(Time.deltaTime);
        
        timers.RemoveAll(t => t.IsCompleted);

        while (toAdd.Count > 0){
            timer.Add(toAdd.Dequeue());
        }
    }
    #endregion

    #region Logic
    public ITimer AddTimer(float delay, Action callback, bool loop = false){
        Timer t = pool.Count > 0 ? pool.Pop() : new Timer();
        t.Init(delay, callback, loop);
        toAdd.Enqueue(t);
        return t;
    }

    public void RemoveTimer(ITimer target){
        if(target is Timer t && timers.Contains(t)){
            t.Cancel();
        }
    }

    internal void Recycle(Timer t){
        pool.Push(t);
    }
    #endregion
}