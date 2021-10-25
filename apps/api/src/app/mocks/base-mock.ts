export abstract class MockBase {
  static createMock(data: Record<string | number, unknown>) {
    return { ...data } as unknown as MockBase;
  }
}
