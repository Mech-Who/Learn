#include <iostream>
#include <memory>
using namespace std;

class ConcreteElementA;
class ConcreteElementB;

class Visitor{
public:
    virtual void visit(ConcreteElementA&) = 0;
    virtual void visit(ConcreteElementB&) = 0;
    virtual ~Visitor(){}
};

class Element{
public:
    virtual void accept(shared_ptr<Visitor> v) = 0;
    virtual ~Element(){}
};

class ConcreteElementA: public Element{
public:
    string featureA(){
        return "featureA!";
    }
    virtual void accept(shared_ptr<Visitor> v){
        cout << "Accept: " << typeid(*v).name() << endl;
        v->visit(*this);
    }
};

class ConcreteElementB: public Element{
public:
    string featureB(){
        return "featureB!";
    }
    virtual void accept(shared_ptr<Visitor> v){
        cout << "Accept: " << typeid(*v).name() << endl;
        v->visit(*this);
    }
};

class ConcreteVisitorA: public Visitor{
public:
    virtual void visit(ConcreteElementA& elem){
        cout << "A get: " << elem.featureA() << endl;
    }
    virtual void visit(ConcreteElementB& elem){
        cout << "B get: " << elem.featureB() << endl;
    }
};

class ConcreteVisitorB: public Visitor{
public:
    virtual void visit(ConcreteElementA& elem){
        cout << "B get: " << elem.featureA() << endl;
    }
    virtual void visit(ConcreteElementB& elem){
        cout << "B get: " << elem.featureB() << endl;
    }
};

int main(){
    shared_ptr<Visitor> v = make_shared<ConcreteVisitorA>();
    shared_ptr<Element> eA = make_shared<ConcreteElementA>();
    shared_ptr<Element> eB = make_shared<ConcreteElementB>();
    eA->accept(v);
    eB->accept(v);
    return 0;
}
