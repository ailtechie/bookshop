alert("Please check my work a bit late, closier to deadline")

const layout = {
    createHeader() {
        const header = document.createElement('header');
        document.body.prepend(header);
    },

    createMainStructure() {
        layout.createHeader();
    }        
};

layout.createMainStructure();