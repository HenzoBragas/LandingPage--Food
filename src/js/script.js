$(document).ready(function () {
    // Mobile Menu Toggle
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active'); // Alterna o menu mobile
        $('#mobile_btn').find('i').toggleClass('fa-x'); // Alterna o ícone
    });

    // Variáveis das seções e itens do menu
    const sections = $('section');
    const navItems = $('.nav-item');

    // Scroll Event Listener
    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop();
        const headerHeight = header.outerHeight(); // Altura do header fixo

        // Aplica ou remove sombra no header ao rolar
        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        let activeSectionIndex = -1; // Nenhuma seção ativa inicialmente

        // Verifica qual seção está no viewport
        sections.each(function (i) {
            const section = $(this);
            const sectionTop = section.offset().top - headerHeight; // Topo da seção considerando o header
            const sectionBottom = sectionTop + section.outerHeight(); // Base da seção

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i; // Atualiza a seção ativa
                return false; // Encerra o loop
            }
        });

        // Atualiza o estado dos itens do menu
        navItems.removeClass('active');
        if (activeSectionIndex >= 0) {
            $(navItems[activeSectionIndex]).addClass('active');
        }
    });

    // Scroll Suave ao clicar nos links do menu
    $('.nav-item a').on('click', function (e) {
        e.preventDefault(); // Previne comportamento padrão do link
        const targetId = $(this).attr('href'); // Obtém o ID da seção alvo
        const target = $(targetId);
        const headerHeight = $('header').outerHeight(); // Altura do header fixo

        if (target.length) {
            $('html, body').animate(
                {
                    scrollTop: target.offset().top - headerHeight // Rolagem até o topo da seção
                },
                500 // Duração da animação
            );
        }
    });

    // Configuração de ScrollReveal para animações
    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#feedback_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.feedbacks', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    });
});
