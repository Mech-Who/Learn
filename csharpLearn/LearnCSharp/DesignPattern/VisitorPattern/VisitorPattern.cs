using System;

abstract class Visitor{
	public abstract void visit(ConcreteElementA a);
	public abstract void visit(ConcreteElementB b);
};

interface Element{
	void accept(Visitor v);
};

class ConcreteVisitorA: Visitor{
	public override void visit(ConcreteElementA a){
		Console.WriteLine("Visit Element A!");
	}
	public override void visit(ConcreteElementB b){
		Console.WriteLine("Visit Element B!");
	}
};

class ConcreteElementA: Element{
	public void accept(Visitor v){
		v.visit(this);
	}
};

class ConcreteElementB: Element{
	public void accept(Visitor v){
		v.visit(this);
	}
}

public class Program
{
	public static void Main()
	{
		Visitor v = new ConcreteVisitorA();
		ConcreteElementA a = new();
		ConcreteElementB b = new();
		a.accept(v);
		b.accept(v);
	}
}