export class Model {
  private data = [
    {
      name: "Timofei Viakin",
    },
    {
      name: "Sergio Satanenko",
    },
  ];

  getData() {
    return this.data;
  }

  insert(el: { name: string }) {
    this.data.push(el);
  }
}
