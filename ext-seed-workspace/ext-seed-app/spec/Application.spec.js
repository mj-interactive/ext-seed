describe('Application', function () {
    it("Ext Js 5 is already loaded", function() {
        expect(Ext).toBeDefined();
        expect(Ext.getVersion().major).toEqual(5);
    });
})