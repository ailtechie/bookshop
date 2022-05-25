alert("Please check my work a bit late, closier to deadline")

const layout = {
    createLayout() {
        const header = document.createElement('header');
        const main = document.createElement('main');
        const footer = document.createElement('footer');
        document.body.prepend(header);
        header.after(main);
        main.after(footer); 
    },

    createNewElement(element, nameEl, nameClass, place) {
        nameEl = document.createElement(element);
        place.append(nameEl);
        nameEl.classList.add(nameClass);
    },

    createNewImg (element, nameClass, place, src) {
        element = document.createElement('img');
        place.append(element);
        element.classList.add(nameClass);
        element.src = src;
        element.alt = nameClass;
    },

    createMainStructure() {
        layout.createLayout();
        //logo
        layout.createNewElement('div', 'div', 'logo', document.querySelector('header'));
        layout.createNewElement('a', 'logoLink', 'logoLink', document.querySelector('.logo'));
        document.querySelector('.logoLink').setAttribute('href', './index.html');
        layout.createNewImg('img', 'imgLogo', document.querySelector('.logoLink'), './assets/logo.png');
        //nav
        layout.createNewElement('nav', '', 'nav', document.querySelector('header'));
        layout.createNewElement('ul', '', 'ul', document.querySelector('nav'));
        layout.createNewElement('li', '', 'about', document.querySelector('ul'));
        layout.createNewElement('a', 'aboutLink', 'aboutLink', document.querySelector('.about'));
        document.querySelector('.aboutLink').setAttribute('href', './index.html');
        document.querySelector('.aboutLink').innerHTML += 'About';
        layout.createNewElement('li', '', 'catalogue', document.querySelector('ul'));
        layout.createNewElement('a', 'catalogueLink', 'catalogueLink', document.querySelector('.catalogue'));
        document.querySelector('.catalogueLink').setAttribute('href', './catalogue.html');
        document.querySelector('.catalogueLink').innerHTML += 'Catalogue';
        layout.createNewElement('li', '', 'order', document.querySelector('ul'));
        layout.createNewElement('a', 'orderLink', 'orderLink', document.querySelector('.order'));
        document.querySelector('.orderLink').setAttribute('href', './order.html');
        document.querySelector('.orderLink').innerHTML += 'Order';
        layout.createNewElement('li', '', 'contact', document.querySelector('ul'));
        layout.createNewElement('a', 'contactLink', 'contactLink', document.querySelector('.contact'));
        document.querySelector('.contactLink').setAttribute('href', './contact.html');
        document.querySelector('.contactLink').innerHTML += 'Contact';
        //main
        layout.createNewElement('div', 'div', 'catalogue-header', document.querySelector('main'));
        //catalogue
        layout.createNewElement('div', 'div', 'catalogue-wrapper', document.querySelector('main'));

        //footer
        layout.createNewElement('div', 'div', 'github', document.querySelector('footer'));
        layout.createNewElement('ul', 'gitul', 'gitul', document.querySelector('.github'));
        layout.createNewElement('li', '', 'copyright', document.querySelector('.gitul'));
        document.querySelector('.gitul').innerHTML += '©';
        layout.createNewElement('li', '', 'year', document.querySelector('.gitul'));
        document.querySelector('.gitul').innerHTML += '2022';
        layout.createNewElement('li', 'git', 'git', document.querySelector('.gitul'));
        layout.createNewElement('a', 'gitLink', 'gitLink', document.querySelector('.git'));
        document.querySelector('.git').setAttribute('href', 'https://github.com/ailtechie');
        document.querySelector('.git').innerHTML += 'ailtechie'; 
        layout.createNewElement('div', 'div', 'rss', document.querySelector('footer'));
        layout.createNewElement('a', 'rsLink', 'rsLink', document.querySelector('.rss'));
        document.querySelector('.rsLink').setAttribute('href', 'https://rs.school');
        document.querySelector('.rsLink').innerHTML += 'RS School';
        


        // layout.createNewElement('a', 'logoLink', 'logoLink', document.querySelector('.logo'));
        // document.querySelector('.logoLink').setAttribute('href', './index.html');
        // layout.createNewImg('img', 'imgLogo', document.querySelector('.logoLink'), './assets/logo.png');





        // layout.createElement('a', 'aLogo', 'aLogo', document.querySelector('.div-books-logo'));
        // document.querySelector('.aLogo').setAttribute('href', 'https://yuliyashu.github.io/books-shop-js/pages/main/')
        // struct.createImg('books-logo', 'books-logo', document.querySelector('.aLogo'), '../../assets/books.jpg');
        
    },        
};

layout.createMainStructure();

// createStructure() {
//     const header = document.createElement('header');
//     const main = document.createElement('main');
//     const footer = document.createElement('footer');
//     document.body.prepend(header);
//     document.body.append(main);
//     document.body.append(footer);       
//     // wrapper.classList.add('wrapper');
// },

// createStructure();