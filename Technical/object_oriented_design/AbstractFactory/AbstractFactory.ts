interface IProduct {
  create<P>(): P;
}

abstract class Factory {
  public abstract create<P>(...args: any[]): P;
}

interface IEmployeeFactory {

}