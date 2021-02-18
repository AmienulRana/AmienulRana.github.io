const services = document.querySelectorAll('.service');
const serviceRow = document.querySelector('.row-service');

window.addEventListener('scroll', function () {
    if (innerWidth < 476) {
        serviceRow.removeAttribute("data-aos");
    }
    else if (innerWidth > 767) {
        services.forEach(service => {
            service.removeAttribute("data-aos");
        });
    }
});

const iconServ = [
    {
        icon: 'fab fa-apple',
        profesi: 'IOS Developer',
        project: '14 Projects'
    },
    {
        icon: 'fas fa-desktop',
        profesi: 'Web Developer',
        project:'15 Projects'
    },
    {
        icon: 'fas fa-mobile-alt',
        profesi: 'Android Developer',
        project:'7 Projects'
    }
];
let icon = ''
iconServ.forEach(iServ => {
    return icon += Icons(iServ); 
})

function Icons(i) {
    return ( 
        `<div class="col-lg-3 col-10 col-md-3 col-sm-5 service justify-content-between" data-aos="fade-up">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <i class="${i.icon}" style="font-size: 38px; color: #e79e16; margin-right: 20px;"></i>
            <h4>${i.profesi}</h4>
            <p class="total-project">${i.project}</p>
        </div>`
    )
}

document.querySelector('.row-service').innerHTML = icon;