$(function () {
  //----------------------Theme

  $(".logo__link").on("click", function () {
    try {
      if (localStorage.getItem("theme") !== "dark") {
        localStorage.setItem("theme", "dark");
        $("html").addClass("dark-theme");
        imagesThemeDark();
        location.reload();
      } else {
        localStorage.removeItem("theme", "dark");
        $("html").removeClass("dark-theme");
        imagesThemeLight();
        location.reload();
      }
    } catch (error) {}
  });
  try {
    if (localStorage.getItem("theme") === "dark") {
      localStorage.setItem("theme", "dark");
      $("html").addClass("dark-theme");
      imagesThemeDark();
    } else {
      localStorage.removeItem("theme", "dark");
      $("html").removeClass("dark-theme");
      imagesThemeLight();
    }
  } catch (error) {}

  function imagesThemeDark() {
    $(".dark-style").addClass("dark-style--active");
    $(".light-style").removeClass("light-style--active");
  }
  function imagesThemeLight() {
    $(".dark-style").removeClass("dark-style--active");
    $(".light-style").addClass("light-style--active");
  }
  //-----------------------------
  $(".nav__language").on("click", function (e) {
    const lang = e.target.id;
  });

  //slider
  $(".header__slider").slick({
    dots: true,
    arrows: false,
    autoplay: true,
  });

  $(".certificates__slider").slick({
    dots: true,
    prevArrow:
      '<button type="button" class="certificate__arrow certificate__arrow-left"> <img src="./img/arrow-left.svg" alt="arrow left" class="certificate__arrow-img"></button>',
    nextArrow:
      '<button type="button" class="certificate__arrow certificate__arrow-right"> <img src="./img/arrow-right.svg" alt="arrow right" class="certificate__arrow-img"></button>',
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".products__slider").slick({
    dots: true,
    prevArrow:
      '<button type="button" class="products__arrow products__arrow-left"> <img src="./img/arrow-left.svg" alt="arrow left" class="products__arrow-img"></button>',
    nextArrow:
      '<button type="button" class="products__arrow products__arrow-right"> <img src="./img/arrow-right.svg" alt="arrow right" class="products__arrow-img"></button>',
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".other-pack__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
  });

  //burger
  $(".nav__burger").on("click", function () {
    if ($(".nav__menu-burger").hasClass("nav__menu-burger--active")) {
      $(".nav__menu-burger").removeClass("nav__menu-burger--active");
    } else {
      $(".nav__menu-burger").addClass("nav__menu-burger--active");
    }
  });

  //scroll
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".button-up").addClass("button-up--active");
    } else if ($(window).scrollTop() <= 50) {
      $(".button-up").removeClass("button-up--active");
    }
  });
});
const langArr = {
  title: {
    en: "en",
    ru: "ru",
  },
  //-----------------nav
  "nav-products": {
    en: "Products",
    ru: "Продукция",
  },
  "nav-products-laminate": {
    en: "Laminate tubes",
    ru: "Ламинатные тубы",
  },
  "nav-products-extrusion": {
    en: "Extrusion tubes",
    ru: "Экструзионные тубы",
  },
  "nav-products-other": {
    en: "Other packaging",
    ru: "Другая упаковка",
  },

  "nav-certificates": {
    en: "Certificates",
    ru: "Сертификаты",
  },
  "nav-our-team": {
    en: "Our Team",
    ru: "Наша команда",
  },
  "nav-about-us": {
    en: "About Us",
    ru: "О нас",
  },
  "nav-news": {
    en: "News",
    ru: "Новости",
  },
  "nav-jobs": {
    en: "Jobs",
    ru: "Вакансии",
  },
  "nav-contacts": {
    en: "Contacts",
    ru: "Контакты",
  },

  //------------btn
  "btn-products-laminate ": {
    en: "Laminate tubes",
    ru: "Ламинатные тубы",
  },
  "btn-products-extrusion": {
    en: "Extrusion tubes",
    ru: "Экструзионные тубы",
  },
  "btn-products-other": {
    en: "Other packaging",
    ru: "Другая упаковка",
  },
  "btn-products-catalog": {
    en: "Go to catalog",
    ru: "Перейти в каталог",
  },
  "btn-our-team": {
    en: "Our team",
    ru: "Наша команда",
  },
  "btn-news": {
    en: "All news",
    ru: "Все новости",
  },
  //-----get-info
  "title-get-info": {
    en: "Get more  <span class='lng-name-cl'>information</span>",
    ru: "Получить подробную   <span class='lng-name-cl'>информацию</span>",
  },
  "get-info-text": {
    en: "Just fill out the form, our manager will contact you shortly",
    ru: "Просто заполните форму, наш менеджер свяжетсяс вами в ближайшее время",
  },
  "get-info-input-text": {
    en: "Your name ",
    ru: "Ваше имя",
  },
  "get-info-textarea-text": {
    en: "Commentary",
    ru: "Комментарий",
  },
  "get-info-bnt-information": {
    en: "Get Information",
    ru: "Получить информацию",
  },
  //--------------------slider
  "slider-title-laminate": {
    en: "Laminate tubes",
    ru: "Ламинатные тубы",
  },
  "slider-title-extrusion": {
    en: "Extrusion tubes",
    ru: "Экструзионные тубы",
  },
  "slider-title-other": {
    en: "Other packaging",
    ru: "Другая упаковка",
  },
  "slider-leangroup": {
    en: "LEANGROUP - tubes and labels",
    ru: "LEANGROUP - тубы и этикетки",
  },
  "slider-leangroup-page": {
    en: "LEANGROUP - quality has no competition",
    ru: "LEANGROUP - у качества нет конкуренции",
  },
  "slider-btn-catalog": {
    en: "Catalog",
    ru: "Каталог",
  },
  "slider-btn-contact-us": {
    en: "Contact Us",
    ru: "Связаться с нами",
  },
  "slider-text-1": {
    en: "Widely used in the segment of cosmetics, food industry, parapharmaceuticals, household chemicals and DIY (Do-it-Yourself).",
    ru: "Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).",
  },
  "slider-text-2": {
    en: "Extrusion tubes are used to package and promote more expensive products, mainly in the cosmetics industry.",
    ru: "Экструзионные тубы применяются для упаковки и продвижения более дорогих продуктов, в основном в косметической отрасли.",
  },
  "slider-text-3": {
    en: "Widely used in the segment of cosmetics, food industry, parapharmaceuticals, household chemicals and DIY (Do-it-Yourself).",
    ru: "Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).",
  },

  //----------------title
  "title-about-company": {
    en: "About <span class='lng-name-cl'>LEANGROUP</span>",
    ru: "О компании <span class='lng-name-cl'>LEANGROUP</span>",
  },
  "title-certificates": {
    en: "Product quality is confirmed by  <span class='lng-name-cl'>certificates</span>",
    ru: "Качество продукции подтверждают  <span class='lng-name-cl'>сертификаты</span>",
  },
  "title-our-products": {
    en: "Our <span class='lng-name-cl'>products</span>",
    ru: "Наша  <span class='lng-name-cl'>продукция</span>",
  },
  "title-our-team": {
    en: "Our <span class='lng-name-cl'>team</span>",
    ru: "Наша <span class='lng-name-cl'> команда</span>",
  },
  "title-news": {
    en: "News",
    ru: "Новости",
  },
  // footer-------------
  "footer-title-contacts": {
    en: "Contacts",
    ru: "Контакты",
  },

  // -----------------text
  "text-about-company-p1": {
    en: "LLC «LeanGroup» started its activities in 1999 and today is the leading company in the production of laminate and extrusion tubes.",
    ru: "Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и на сегодняшний день является ведущей компанией по производству ламинатных и экструзионных туб.",
  },
  "text-about-company-p2": {
    en: " With two technologies - for the production of laminate and extrusion tubes - we offer you a wide range of possibilities. A great advantage is our own printing shop in laminate and in-line printing in extrusion with the possibility of various additional decor options. Particular attention is paid to working with suppliers to control and maintain the quality of our products.",
    ru: " Имея две технологии – для производства ламинатных и экструзионных туб, мы предлагаем вам широкий спектр возможностей. Большим преимуществом является собственный печатный цех в ламинате и in-line печать в экструзии с возможностью различных дополнительных опций декора. Особое внимание уделяется работе с поставщиками для контроля и поддержания качества производимой нами продукции.",
  },
  "text-about-company-p3": {
    en: "Since January 2018, the company became a member of the European Tube Manufacturers Association (ETMA), which confirms the brand's strong position in the European market as well.",
    ru: "С января 2018 года компания стала членом Европейской Ассоциации производителей туб (ETMA), что подтверждает сильную позицию бренда и на рынке Европы.",
  },

  //--------------news-----
  "news-text-1": {
    en: "The 'LeanGroup' is the silver medalist in EcoVadis!",
    ru: "'ЛеанГрупп' серебряный призер EcoVadis!",
  },
  "news-text-2": {
    en: "'LeanGroup' is an EcoVadis silver medalist!",
    ru: "'ЛеанГрупп' серебряный призер EcoVadis!",
  },
  "news-text-3": {
    en: "Tubes as a type of packaging",
    ru: "Туба, как вид упаковки",
  },
  //------------foter
  "footer-city-belarus": {
    en: "Belarus",
    ru: "Беларусь",
  },
  "footer-city-moscow": {
    en: "Moscow",
    ru: "Москва",
  },
  "footer-city-yekaterinburg": {
    en: "Yekaterinburg",
    ru: "Екатеринбург",
  },
  "footer-city-europe": {
    en: "Europe",
    ru: "Европа",
  },
  "footer-phone": {
    en: "Phone",
    ru: "Телефон",
  },
  "footer-adress": {
    en: "Adress",
    ru: "Адрес",
  },
  "footer-products": {
    en: "Products",
    ru: "Продукция",
  },
  "footer-company": {
    en: "Company",
    ru: "Компания",
  },
  "footer-sections": {
    en: "Sections",
    ru: "Разделы",
  },
  "footer-text-adress-belarus": {
    en: "ul. 25A Promyshlennaya St., 220075, Minsk, Belarus",
    ru: "ул. Промышленная, д.25А, 220075, г. Минск, Беларусь",
  },
  "footer-text-adress-moscow": {
    en: "89 Volokolamskoe Shosse, Office 516, 125371, Moscow, Russian Federation",
    ru: "Волоколамское шоссе, 89, офис 516, 125371, г. Москва, Российская Федерация",
  },
  "footer-text-adress-yekaterinburg": {
    en: "ul. Sukhodolskaya, 197, office 303, 620085, Ekaterinburg, Russian Federation",
    ru: "ул. Суходольская, д.197, офис 303, 620085, г. Екатеринбург, Российская Федерация",
  },
  "footer-text-adress-europe": {
    en: "LEANGROUP EUROPE Sp.z o.o. Al.Jerozolimskie 85, office 21 02-001 Warszawa",
    ru: "LEANGROUP EUROPE Sp.z o.o. Al.Jerozolimskie 85, office 21 02-001 Warszawa, Польша",
  },
  "footer-copy": {
    en: "© 2022 Leangroup. All Rights Reserved. Website development and promotion SkyWeb.by",
    ru: "© 2022 Leangroup. All Rights Reserved. Разработка и продвижение сайтов SkyWeb.by",
  },

  //----------breadcrumbs---
  "breadcrumbs-main": {
    en: "Home",
    ru: "Главная",
  },
  "breadcrumbs-catalog": {
    en: "Catalog",
    ru: "Каталог",
  },
  "breadcrumbs-about-us": {
    en: "About Us",
    ru: "О нас",
  },
  "breadcrumbs-our-team": {
    en: "Our team",
    ru: "Наша команда",
  },
  "breadcrumbs-about-us": {
    en: "About Us",
    ru: "О нас",
  },
  "breadcrumbs-laminate": {
    en: "Laminate tubes",
    ru: "Ламинатные тубы",
  },
  "breadcrumbs-extrusion": {
    en: "Extrusion tubes",
    ru: "Экструзионные тубы",
  },
  "breadcrumbs-other-packing": {
    en: "Other packaging",
    ru: "Другая упаковка",
  },
  "breadcrumbs-certificates": {
    en: "Certificates",
    ru: "Сертификаты",
  },

  //-------------Laminate Tubes---

  "laminates-info-text": {
    en: "They are used for the production of toothpaste because of the high barrier properties of this type of tubes. Recently, laminated tubes have been widely used in the cosmetics, food, parapharmaceutical, household chemistry and DIY (Do-it-Yourself) segments due to the fact that this technology meets the high requirements for product packaging and can offer a wide range of printing and decoration to attract the end consumer's attention.",
    ru: "Используются для производства зубных паст из-за высоких барьерных свойств туб данного вида. В последнее время ламинатные тубы широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself) ввиду того, что данная технология отвечает высоким требованиям для упаковки продукции и может предложить широкий спектр печати и декорирования для привлечения внимания конечного потребителя.",
  },
  "laminates-limits": {
    en: "There are virtually no restrictions on the use of tubes as packaging, it all depends only on the requirements for the product inside.",
    ru: "Ограничений по использованию туб в качестве упаковки практически нет, все зависит только от требований, предъявляемых к продукту внутри.",
  },
  "laminates-info-ul-title-1": {
    en: "Barrier properties",
    ru: "Барьерные свойства",
  },
  "laminates-info-ul-title-2": {
    en: "Production technology",
    ru: "Технология производства",
  },
  "laminates-info-ul-text-1": {
    en: "There is always a special protective layer (plastic or aluminum) inside to protect the product from air penetration, sunlight).",
    ru: "Внутри всегда есть специальный защитный слой (пластиковый или алюминиевый), обеспечивающий защиту продукта от проникновения воздуха, солнечных лучей).",
  },
  "laminates-info-ul-text-2": {
    en: "There is always a side seam on the tube. First, a special film is printed and only then is a cylinder of the desired size formed, which becomes a tube.",
    ru: "Всегда есть боковой шов на тубе. Cначала наносится печать на специальную пленку и только потом формируется цилиндр необходимого размера, который станет тубой.",
  },
  "laminate-title": {
    en: "Laminate <span class='lng-name-cl'>tubes</span>",
    ru: "Ламинатные <span class='lng-name-cl'>тубы</span>",
  },
  //--------------extrusion--
  "extrusion-title": {
    en: "Extrusion <span class='lng-name-cl'>tubes</span>",
    ru: "Экструзионные  <span class='lng-name-cl'>тубы</span>",
  },
  "extrusion-slider-title": {
    en: "Extrusion tubes",
    ru: "Экструзионнные тубы",
  },
  "extrusion-slider-text": {
    en: "Extrusion tubes are used to package and promote more expensive products, mainly in the cosmetics industry.",
    ru: "Экструзионные тубы применяются для упаковки и продвижения более дорогих продуктов, в основном в косметической отрасли.",
  },
  "extrusion-text-1": {
    en: "Extrusion tubes are used for packaging and promoting more expensive products, mainly in the cosmetics industry, and have their advantages: the tube is seamless, retains its shape after use, can be painted in any color, has wide opportunities for printing and decorating (offset, flexo, silkscreen, embossing).",
    ru: "Экструзионные тубы применяются для упаковки и продвижения более дорогих продуктов, в основном в косметической отрасли, и имеют свои преимущества: туба является бесшовной, сохраняет свою форму после начала использования, может быть окрашена в любой цвет, имеет широкие возможности в печати и декорировании (офсет, флексо, шелкография, тиснение).",
  },
  "extrusion-text-2": {
    en: "It is precisely because of the possibilities of visual presentation, the ability to highlight the product on the shelf, that the extrusion tube still retains its position and does not lose interest from our customers. Moreover, the extrusion tube is increasingly in demand in a market with high competition and the need to constantly launch new products with individual characteristics.",
    ru: "Именно с учетом возможностей визуальной подачи, возможности выделить продукт на полке, экструзионная туба по-прежнему сохраняет свои позиции и не теряет интереса со стороны наших заказчиков. Более того, экструзионная туба все более востребована на рынке с высокой конкуренцией и необходимостью постоянного запуска новых продуктов с индивидуальными характеристиками.",
  },
  "extrusion-name-1": {
    en: "Form",
    ru: "Форма",
  },
  "extrusion-name-2": {
    en: "Appearance",
    ru: "Внешний вид",
  },
  "extrusion-name-text-1": {
    en: "Keeps its shape even after use (the tube on the consumer's shelf retains its appearance until full use of the product)",
    ru: "Сохраняет форму даже после начала использования (до полного использования продукта тюбик на полке потребителя сохранит свой внешний вид)",
  },
  "extrusion-name-text-2": {
    en: "Looks spectacular (this is due to the peculiarities of the technology, which allows you to paint the tube in different colors, apply a special decor in the form of texture printing, foil stamping, etc.)",
    ru: "Эффектно выглядит (это связано с особенностями технологии, которая позволяет окрашивать тюбик в разные цвета, наносить специальный декор в виде фактурной печати, тиснения фольгой и т.д.)",
  },
  //------------other products---
  "other-packing-title": {
    en: "Other <span class='lng-name-cl'>packaging</span>",
    ru: "Другая <span class='lng-name-cl'>упаковка</span>",
  },

  "other-packing-text-1": {
    en: "Tubas as packaging are still popular primarily because of the fact that printing technologies have been developed. And we can confidently say that the company's 20 years of experience in this area allows us to succeed in other products as well. We are proud to say that we are developing new lines of business, including:",
    ru: "Туба в качестве упаковки до сих пор популярна прежде всего из-за того, что были развиты технологии печати. И мы с уверенностью можем сказать, что 20-летний опыт компании в этой сфере позволяет нам добиваться успехов и в других продуктах. Мы с гордостью сообщаем, что развиваем новые направления, среди которых:",
  },
  "other-packing-text-2": {
    en: "We are becoming a supplier of packaging solutions for our customers, offering a larger range and new possibilities, while maintaining high demands on quality, safety and service.",
    ru: "Мы становимся для своих заказчиков поставщиком упаковочных решений, предлагая больший ассортимент и новые возможности, сохраняя высокие требования к качеству, безопасности и сервису.",
  },
  "other-packing-name-1": {
    en: "Self-adhesive labels",
    ru: "Самоклеящиеся этикетки",
  },
  "other-packing-name-2": {
    en: "Heat shrink",
    ru: "Термоусадочные",
  },
  "other-packing-name-3": {
    en: "Circle",
    ru: "Круговые",
  },

  "other-packing-slider-title": {
    en: "Other packaging",
    ru: "Другая упаковка",
  },
  "other-packing-slider-text": {
    en: "Widely used in the segment of cosmetics, food industry, parapharmaceuticals, household chemicals and DIY (Do-it-Yourself).",
    ru: "Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).",
  },
  //-----------Products Naming---
  "products-tite": {
    en: "Our <span class='lng-name-cl'>Products</span>",
    ru: "Наши <span class='lng-name-cl'>продукты</span>",
  },
  "products-name-height": {
    en: "Height, mm",
    ru: "Высота, мм",
  },
  "products-name-volume": {
    en: "Volume, ml",
    ru: "Объем, мл",
  },
  "products-name-thread": {
    en: "Thread",
    ru: "Резьба",
  },

  //----------Our Team---
  "our-team-title": {
    en: "Our team",
    ru: "Наша команда",
  },

  "our-team-text-1": {
    en: "'LeanGroup' LLC has been successfully working on the packaging market since 1999, and the basis of our company's reputation in the sphere of tubes production is a team of professionals, who constantly develop their skills and improve their qualifications and keep abreast of the latest events and innovations in the production of laminated and extrusion tubes, as well as labels.",
    ru: "ООО «ЛеанГрупп» успешно работает на рынке упаковки с 1999 года и основа репутации нашей компании в сфере производства туб – это коллектив мастеров своего дела, которые постоянно развиваются профессионально, а также повышают свою квалификацию и находятся в тренде последних событий и новшеств в сфере производста ламинатных и экструзионных туб, а также этикетки.",
  },
  "our-team-text-2": {
    en: "We strive to improve the quality and competitiveness of our products through continuous improvement of the technological process, the use of high quality raw materials, high-tech equipment and study of the requirements of the plastic packaging market.",
    ru: "Мы стремимся к повышению качества и конкурентоспособности выпускаемой продукции за счет постоянного совершенствования технологического процесса, использования сырья высокого качества, высокотехнологичного оборудования и изучения требований рынка пластиковой упаковки.",
  },

  "our-team-title-services-1": {
    en: "<span class='lng-name-cl'>Customer Service</span> Department",
    ru: "Отдел <span class='lng-name-cl'>сопровождения клиентов</span>",
  },
  "our-team-title-services-2": {
    en: "<span class='lng-name-cl'>Supply</span> Department",
    ru: "Отдел <span class='lng-name-cl'>снабжения</span>",
  },
  "our-team-title-services-3": {
    en: "Prepress <span class='lng-name-cl'>management</span>",
    ru: "Управление допечатных в <span class='lng-name-cl'>процессо</span>",
  },
  "our-team-person-name-1": {
    en: "Daria Voynich",
    ru: "Войнич Дарья",
  },
  "our-team-person-name-2": {
    en: "Kateryna Misko",
    ru: "Мисько Екатерина",
  },
  "our-team-person-name-3": {
    en: "Yelena Misnik",
    ru: "Мисник Елена",
  },
  "our-team-person-name-4": {
    en: "Sachuk Andrei",
    ru: "Сачук Андрей",
  },
  "our-team-person-name-5": {
    en: "Yevgeny Antukh",
    ru: "Антух Евгений",
  },
  "our-team-person-name-6": {
    en: "Gurieva Natalia",
    ru: "Гурьева Наталья",
  },
  "our-team-person-name-7": {
    en: "Golovina Svetlana",
    ru: "Головина Светлана",
  },
  "our-team-person-name-8": {
    en: "Dmitriy Dmytrochenko",
    ru: "Дмитроченко Дмитрий",
  },
  "our-team-person-name-9": {
    en: "Olga Shvetskaya",
    ru: "Швецкая Ольга",
  },
  "our-team-btn": {
    en: "Join the team",
    ru: "Присоединиться к команде",
  },
  "our-team-position-1": {
    en: "Deputy Director of Sales",
    ru: "Заместитель директора по продажам",
  },
  "our-team-position-2": {
    en: "Head of Customer Support",
    ru: "Начальник отдела сопровождения клиентов",
  },
  "our-team-position-3": {
    en: "Customer Service Specialist",
    ru: "Специалист по работе с клиентами",
  },
  "our-team-position-4": {
    en: "Deputy Director of Logistics",
    ru: "Заместитель директора по логистике",
  },
  "our-team-position-5": {
    en: "Head of Procurement",
    ru: "Начальник отдела снабжения",
  },
  "our-team-position-6": {
    en: "Senior Procurement Specialist",
    ru: "Ведущий специалист по снабжению",
  },
  "our-team-position-7": {
    en: "Senior Procurement Specialist",
    ru: "Ведущий специалист по снабжению",
  },
  "our-team-position-8": {
    en: "Head of prepress department",
    ru: "Начальник отдела допечатной подготовки",
  },
  "our-team-position-9": {
    en: "Head of prepress department",
    ru: "Начальник управления допечатных процессов",
  },

  //----------About-----
  "about-au-title": {
    en: "About Us",
    ru: "О нас",
  },
  "about-us-text": {
    en: "LLC 'LeanGroup' started its activities in 1999 and today is the leading company in the production of laminated and extrusion tubes, used as packaging for cosmetics, personal care and oral care products, food, repellents, household chemicals, and pharmaceutical products.",
    ru: "Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и на сегодняшний день является ведущей компанией по производству ламинатных и экструзионных туб, применяемых в качестве упаковки для косметических средств, средств личной гигиены и по уходу за полостью рта, продуктов питания, репеллентов, товаров бытовой химии, а также фармацевтической продукции.",
  },
  "about-us-btn": {
    en: "Our team",
    ru: "Наша команда",
  },
  "about-us-text-video-1": {
    en: "We produce tubes in different diameters - from 16 mm. up to 50 mm. Having two technologies - for the production  <span class='lng-name-cl'>laminate</span> and <span class='lng-name-cl'>extrusion</span> tubes, we can offer our customers a wide range of possibilities. The big advantage is our own printing shop in laminate and in-line printing in extrusion with a possibility of different additional options of décor. Particular attention is paid to working with suppliers to control and maintain the quality of our products.",
    ru: "Мы производим тубы различных диаметров - от 16 мм. до 50 мм. Имея две технологии – для производства <span class='lng-name-cl'>ламинатных</span> и <span class='lng-name-cl'>экструзионных</span> туб, мы можем предложить нашим заказчикам широкий спектр возможностей. Большим преимуществом является собственный печатный цех в ламинате и in-line печать в экструзии с возможностью различных дополнительных опций декора. Особое внимание уделяется работе с поставщиками для контроля и поддержания качества производимой нами продукции.",
  },
  "about-us-text-video-2": {
    en: "LeanGroup LLC is certified to the international BRC standard for packaging - with the highest rating, which allows us to demonstrate the company's competence in HACCP, hygiene, product safety and quality systems, fully ensuring product safety for consumers.",
    ru: "ООО «ЛеанГрупп» сертифицирована на соответствие международному стандарту BRC для упаковки - с высшей оценкой, что позволяет демонстрировать компетентность предприятия в области системы ХАССП, гигиены, безопасности продукции и систем качества, полностью обеспечивая безопасность продуктов для потребителей.",
  },
  "about-us-text-video-3": {
    en: "Since January 2018 the company became a member of the European Tube Manufacturers Association (ETMA), which confirms the strong position of the brand in the European market as well.",
    ru: "С января 2018 года компания стала членом Европейской Ассоциации производителей туб (ETMA), что подтверждает сильную позицию бренда и на рынке Европы.",
  },

  //----------mark-naming--
  "mark-naming-text-ok": {
    en: "octagonal threaded cap",
    ru: "восьмиугольный резьбовой колпак",
  },
  "mark-naming-text-BF": {
    en: "”butterfly” - shoulder",
    ru: "плечо -”бабочка”",
  },

  "mark-naming-text-UN": {
    en: "shoulder - ”narrow nose”",
    ru: "плечо-”узкий нос”",
  },

  "mark-naming-text-IN": {
    en: "insert shoulder (internal partitions in the shoulder to separate the contents by color)",
    ru: "плечо с инсертом (внутренние перегородки в плече для разделения содержимого по цветам)",
  },
  "mark-naming-text-BM": {
    en: "set of tapered threaded arm with threaded cylindrical cap with coarse corrugation",
    ru: "комплект из конического резьбового плеча с резьбовым цилиндрическим колпачком с крупным рифлением",
  },
  "mark-naming-text-CP": {
    en: "Sponge applicator",
    ru: "апликатор-спонж",
  },
  "mark-naming-text-C1": {
    en: "threaded cylindrical cap",
    ru: "резьбовой цилиндрический колпачок",
  },
  "mark-naming-text-C3": {
    en: "Fluted threaded cylindrical cap",
    ru: "рифленый резьбовой цилиндрический колпачок",
  },
  "mark-naming-text-K1": {
    en: "conical threaded cap with fine knurling",
    ru: "конический резьбовой колпачок с мелким рифлением",
  },
  "mark-naming-text-F1": {
    en: "threaded flip-top with fine ribbing",
    ru: "резьбовой флип-топ с мелким рифлением",
  },
  "mark-naming-text-F2": {
    en: "threaded flip-top",
    ru: "резьбовой флип-топ",
  },
  "mark-naming-text-F3": {
    en: "oriented flip-top (FTO)",
    ru: "ориентированный флип-топ (ФТО)",
  },
  "mark-naming-text-1": {
    en: "*applicator - sponge d35mm",
    ru: "*аппликатор - спонж d35mm",
  },
  "mark-naming-text-2": {
    en: "*cellophaning FTO",
    ru: "*целлофанирование ФТО",
  },
  "mark-naming-text-3": {
    en: "*probable production of tubes in silver ABL",
    ru: "*возможно производство туб из серебристого ABL",
  },
  "mark-naming-text-4": {
    en: "*Threaded shoulder S13 with hole - 'heart'",
    ru: "*резьбовое плечо S13 с отверстием - “сердечком”",
  },
  "mark-naming-text-page2-1": {
    en: "*cellophaning FTO",
    ru: "*целлофанирование ФТО",
  },
  "mark-naming-text-page2-2": {
    en: "*coextrusion (COEX) with EVOH barrier layer",
    ru: "*коэкструзия (COEX) с барьерным слоем EVOH",
  },
  "mark-naming-text-page2-3": {
    en: "*UV protection",
    ru: "*защита от УФ-лучей",
  },

  "mark-naming-page2-title-text": {
    en: "<span class='lng-name-cl'>Labeled tubes</span>",
    ru: "<span class='lng-name-cl'>Тубы с этикеткой</span>",
  },

  "": {
    en: "",
    ru: "",
  },
};

const btnLang = document.querySelectorAll(".nav__language");
const allLang = ["en", "ru"];

for (let i = 0; i < btnLang.length; i++) {
  btnLang[i].addEventListener("click", function (e) {
    const lang = e.target.id;
    window.location.href = window.location.pathname + "#" + lang;
    localStorage.setItem("hash", lang);
    location.reload();
  });

  function language() {
    hash = localStorage.getItem("hash");

    if (!allLang.includes(hash)) {
      location.reload();
      localStorage.setItem("hash", "ru");
    }
    if (localStorage.getItem("hash") === "ru") {
      document.getElementById("ru").classList.add("nav__language--active");
      document.getElementById("en").classList.remove("nav__language--active");
    }
    if (localStorage.getItem("hash") === "en") {
      document.getElementById("en").classList.add("nav__language--active");
      document.getElementById("ru").classList.remove("nav__language--active");
    }

    if (document.getElementById("input") != null) {
      document.getElementById("input").placeholder =
        langArr["get-info-input-text"][hash];
    }

    if (document.getElementById("textarea") != null) {
      document.getElementById("textarea").placeholder =
        langArr["get-info-textarea-text"][hash];
    }

    for (let key in langArr) {
      let elem = document.querySelectorAll(".lng-" + key);

      for (let i = 0; i < elem.length; i++) {
        if (elem[i]) {
          elem[i].innerHTML = langArr[key][hash];
        }
      }
    }
  }
}
language();

// ----------------------Mixit-------

const productsBtn = document.querySelectorAll(".products__btn");
const productsItems = document.querySelectorAll(".products__choice");

productsBtn.forEach((item) => {
  item.addEventListener("click", () => {
    const productsAttr = item.getAttribute("data-filter");
    const productsItem = document.querySelector(productsAttr);
    console.log(item);
    if (productsItem.classList.contains("products__choice--active")) {
    } else {
      document
        .querySelector(".products__choice--active")
        .classList.remove("products__choice--active");
      document
        .querySelector(".products__button--active")
        .classList.remove("products__button--active");
      productsItem.classList.add("products__choice--active");
      item.classList.add("products__button--active");
    }
  });
});
