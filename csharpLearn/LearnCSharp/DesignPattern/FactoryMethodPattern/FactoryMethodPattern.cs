using System;

class Factory{
	public ProductA createProductA(){
		return new ProductA();
	}
	public ProductB createProductB(){
		return new ProductB();
	}
	public ProductC createProductC(){
		return new ProductC();
	}
}

abstract class Product{
	public abstract string getName();
}

class ProductA: Product{
	public override string getName(){return "Product A";}
}

class ProductB: Product{
	public override string getName(){return "Product B";}
}

class ProductC: Product{
	public override string getName(){return "Product C";}
}

class Program{
	public static void Main(){
		Factory fac = new();
		ProductA a = fac.createProductA();
		ProductB b = fac.createProductB();
		ProductC c = fac.createProductC();

		Console.WriteLine(a.getName());
		Console.WriteLine(b.getName());
		Console.WriteLine(c.getName());
	}
}