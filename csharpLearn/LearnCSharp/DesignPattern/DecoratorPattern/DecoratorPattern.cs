using System;

interface DataSource{
	public string readData();
	public void writeData(string data);
}

class FileDataSource: DataSource{
	private string filename;
	private string data;
	public FileDataSource(string filename){
		this.filename = filename;
		this.data = $"file {this.filename}";
	}
	public string readData(){
		return data;
	}
	public void writeData(string data){
		this.data = data;
	}
}

abstract class DecoratorDataSource: DataSource{
	protected DataSource wrapper;
	public DecoratorDataSource(DataSource source){
		this.wrapper = source;
	}
	public abstract string readData();
	public abstract void writeData(string data);
}

class ColorDecoratorDS: DecoratorDataSource{
	public ColorDecoratorDS(DataSource ds): base(ds){}
	public override string readData(){
		return $"{wrapper.readData()} Color";
	}
	public override void writeData(string data){
		data = data.Substring(0, data.Length - 6);
		wrapper.writeData(data);
	}
}

class Program{
	public static void Main(){
		FileDataSource f = new("File1");
		ColorDecoratorDS cf = new(f);

		Console.WriteLine(f.readData());
		Console.WriteLine(cf.readData());

		f.writeData("new Data1");

		Console.WriteLine(f.readData());
		Console.WriteLine(cf.readData());

		cf.writeData("new Data2 Color");

		Console.WriteLine(f.readData());
		Console.WriteLine(cf.readData());
	}
}