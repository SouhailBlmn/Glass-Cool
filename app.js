const card = document.querySelector('.glass-card');
const nav=document.querySelectorAll('.nav-item');
const hero_element=document.querySelectorAll('.header-element');


const TL = gsap.timeline();

TL.from(nav,{autoAlpha:0,y:-100,duration:1,stagger:0.3})
.from(hero_element,{autoAlpha:0,y:-300,duration:2,stagger:.2},'-=.3')
.from(card,{autoAlpha:0, x:-300, rotation:-30, duration:1,ease:'power4.out',},'-=.3')


// gsap.from(nav,{
//     autoAlpha:0,
//     y:-100,
//     duration:1,
//     stagger:0.3,
//     onComplete:()=>{
//         gsap.from(card,{
//             autoAlpha:0,
//             //y:-200,
            // x:-300,
            // rotation:-30,
            // duration:1,
            // ease:'power4.out',
//             onComplete:()=>{
                
//             gsap.from(hero_element,{
//                 autoAlpha:0,
//                 y:-300,
//                 duration:2,
//                 stagger:.2,
//             })
//          }
            
//         })
//     }
// })
