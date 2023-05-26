export class DatabaseLayer {
  private readonly data = [
    {
      id: 1,
      fullName: "Vito Scaletta",
      email: "vito@kpi.lll.ua",
    },
  ];

  getData() {
    return this.data;
  }
}
