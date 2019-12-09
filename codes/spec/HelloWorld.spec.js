describe('Hello World Testing', () => {
    // test for simple Hello World message
    it('should return "Hello world"', () => {
        expect(Hello()).toEqual("Hello World");
    });

    // test for Hello, [name] message
    it('should return "Hello, gurkirat"', () => {
        expect(HelloWithName("gurkirat")).toEqual("Hello, gurkirat");
    });
});