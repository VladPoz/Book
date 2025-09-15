const menu__btn = document.querySelector('.header__menu__btn');
const header__name = document.querySelector('.header__name');
const header__menu__elements = document.querySelector('.header__menu__elements');
const main__sections = document.querySelector('.main__sections');
const main__chapter__name = document.querySelector('.main__chapter__name');
const main__section__header = document.querySelector('.main__section__header');
const main__section__content = document.querySelector('.main__section__content');
const conteiner = document.querySelector('.conteiner');

fetch('../json/data.json')
.then(response => {return response.json()})
.then(data => {
    header__name.textContent = `${data.name}`;
    header__menu__elements.innerHTML = '';
    main__section__header.innerHTML = '';
    main__section__content.innerHTML =  ''; 
    let i = 1;
    
    
    Object.keys(data)
    .filter(key => key.startsWith('section_'))
    .forEach((key, i) => {
        data[key].forEach(section => {
            const box = document.createElement('div')
            // box.classList.add('box');
            const ul = document.createElement('ul')
            // ul.classList.add('ul');
            const li = document.createElement('li')
            li.classList.add('li');
            
            const header__menu__chapters  = document.createElement('a');
            header__menu__chapters.classList.add('header__menu__element');
            header__menu__chapters.textContent = section.chapter_name;
            // header__menu__chapters.href = `#`;
            header__menu__elements.appendChild(header__menu__chapters);
            
            const header__menu__element  = document.createElement('a');
            header__menu__element.classList.add('header__menu__element');
            header__menu__element.textContent = section.section_name;
            header__menu__element.href = `#${section.id}`;
            li.appendChild(header__menu__element);
            // ul.appendChild(li);
            header__menu__elements.appendChild(li);
            
            const main__sectionss = document.createElement('section');
            main__sectionss.classList.add('main__sections');
            main__sectionss.id = `${section.id}`;
            box.appendChild(main__sectionss);
            
            const main__chapter__names = document.createElement('h2');
            main__chapter__names.classList.add('main__chapter__name');
            main__chapter__names.textContent = section.chapter_name;
            box.appendChild(main__chapter__names);
            
            const main__section__headers = document.createElement('h3');
            main__section__headers.classList.add('main__section__header');
            main__section__headers.textContent = section.section_name;
            box.appendChild(main__section__headers);
            
            const main__section__contents = document.createElement('div');
            main__section__contents.classList.add('main__section__content');
            main__section__contents.textContent = section.section_info;
            box.appendChild(main__section__contents); 
            conteiner.appendChild(box);
            
            
        });
    });
});

menu__btn.addEventListener('click', ()=>{
    menu__btn.classList.toggle('active');
});