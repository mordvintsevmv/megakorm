function cattleBlobClick() {
    console.log("blobCattleCl"), openModalCattle()
}

document.querySelector("body").classList.add("stop-scrolling");
let loadingListerner = document.querySelector("body").addEventListener("touchmove", (function (e) {
    e.preventDefault()
})), device = "pc";
window.onload = function () {
    document.querySelector(".previousOfPage").remove(), document.querySelector("body").classList.remove("stop-scrolling"), document.querySelector("body").removeEventListener("touchmove", loadingListerner)
};
let zoomRegion = 8, mapZoomDist = 14, calcStart = 2.9, calcStartSr = 1.7, calcStartMin = .57, calcStartP = 0,
    managersList = [{
        name: "Котов Евгений",
        about: "Главный менеджер</br>по развитию",
        phone: "+7 960 698-38-88",
        email: "kotov.e@megamix.ru",
        photo: "Cotov.webp"
    }, {
        name: "Барбашинов Сергей",
        about: "Старший региональный менеджер по ЦФО",
        phone: "+7 967 187-60-07",
        email: "barbashinov.s@megamix.ru",
        photo: "Barashinov.webp"
    }, {
        name: "Коновалов Николай",
        about: "Региональный менеджер по Приволжскому и Уральскому федеральным округам, странам СНГ",
        phone: "+7 932 535-55-80",
        email: "konovalov.n@megamix.ru",
        photo: "konovalo.webp"
    }, {
        name: "Воропанов Юрий",
        about: "Менеджер по работе с Дистрибьюторами по ЦФО и Южный регион",
        phone: "+7 927 252-59-85",
        email: "voropanov.y@megamix.ru",
        photo: "Voropanov.webp"
    }, {
        name: "Дончук Юлия",
        about: "Руководитель подразделения Пятигорск, Республики Дагестан, Северная Осетия, Ингушетия, Карачаево-Черкесская, Кабардино-Балкарская, Чеченская. Ставропольский и Краснодарский край.",
        phone: "+7 926 029-79-00",
        email: "donchuk.u@megamix.ru",
        photo: "donchuk.jpg"
    }, {
        name: "Роман Козельский",
        about: "Менеджер по работе с дистрибьюторами ЦФО и СЗФО",
        phone: "+7 960 274-46-84",
        email: "kozelskiy.r@megamix.ru",
        photo: "Blue.webp"
    }, {
        name: "Рыбин Александр Михайлович",
        about: "Менеджер по работе с дистрибьюторами ЮФО и Поволжье",
        phone: "+7 909 384-30-06",
        email: "rybin.a@megamix.ru",
        photo: "ribin.webp"
    }];
const calcInfo = [{
    title: "goose",
    img: "duck.webp",
    blobs: 2,
    mt: 17,
    mr: 10,
    width: 59,
    coof: 5.85,
    max: {text: "финиш", weight: 41, coof: 5.85, days: 56, vis: !0},
    sr: {text: "", weight: 0, coof: 0, daysMax: 28, vis: !1, daysMin: 18},
    min: {text: "старт", weight: 16, coof: 2.95, daysMax: 28, vis: !0}
}, {
    title: "turkey",
    img: "turkey.webp",
    mt: 12,
    mr: 12,
    coof: 22.7,
    max: {text: "финиш", weight: 41, coof: 22.7, vis: !0, days: 71},
    sr: {text: "рост", weight: 35, coof: 16.8, daysMax: 71, daysMin: 35, vis: !0},
    min: {text: "старт", weight: 16, coof: 2.85, daysMax: 35, vis: !0}
}, {
    title: "bird",
    img: "quail.webp",
    mt: 19,
    mr: 11,
    coof: 2.8,
    max: {text: "период яйцекладки", weight: .03, days: 42, vis: !0},
    sr: {text: "рост", weight: 1, daysMax: 42, daysMin: 21, vis: !0},
    min: {text: "старт", weight: .48, vis: !0, daysMax: 21}
}, {
    title: "chicken",
    img: "chikenN.webp",
    mt: 18,
    mr: 8,
    coof: 2.5,
    max: {text: "период яйцекладки", weight: .1, days: 29, vis: !0, text: "Период яйцекладки"},
    sr: {text: "рост", weight: 8, daysMax: 133, vis: !0, daysMin: 42},
    min: {text: "старт", weight: .8, vis: !0, daysMax: 35}
}, {
    title: "cattle",
    img: "cow.webp",
    blobs: 1,
    mt: 24,
    mr: 12,
    coof: 100,
    max: {coof: "От условий", text: "", days: 34, vis: !0},
    sr: {text: "", weight: 35, daysMax: 28, daysMin: 18, vis: !1},
    min: {text: "", weight: 16, daysMax: 16, vis: !1}
}, {
    title: "pig",
    img: "pig.webp",
    blobs: 4,
    mt: 24,
    mr: 12,
    width: 58,
    coof: 170,
    max: {coof: 170, text: "Финиш", weight: "170 кг", days: "105-170 дней", vis: !0},
    sr: {coof: 85, text: "Рост", weight: "85 кг", daysMax: "61-104 дня", vis: !0},
    pBlob: {coof: 5.5, text: "Megapig", weight: "5.5 кг", daysMax: "5-42 дня", vis: !0},
    min: {coof: 16, text: "Старт", weight: "16 кг", daysMax: "43-60 дней", vis: !0}
}, {
    title: "rabbit",
    img: "rabbit.webp",
    blobs: 4,
    width: 42,
    mt: 16,
    mr: 12.5,
    coof: 4,
    max: {coof: 4, text: "вволю", weight: "На откроме", days: "63-77 дней", vis: !0},
    sr: {coof: 4, text: "0.1 кг/сут", weight: "После отъема", daysMax: "36-62 дней", daysMin: "", vis: !0},
    pBlob: {coof: 4, text: "Кроликоматки", weight: "0.25 кг/сут", daysMax: "окрол-отъем", vis: !0},
    min: {coof: "От условий", text: "вволю", weight: "До отъема", vis: !0, daysMax: "0-35 дней"}
}, {
    title: "rooster",
    img: "rooster.webp",
    mt: 21,
    mr: 15,
    coof: 2.9,
    width: 35,
    max: {text: "финиш", weight: 2.9, days: 29, vis: !0},
    sr: {text: "рост", weight: 1.7, daysMax: 15, vis: !0, daysMin: 28},
    min: {text: "старт", weight: .57, daysMax: 14, vis: !0}
}];

function contactClick(e) {
}

const elemOfScroll = document.querySelector(".toMegaMixAboutUs");

function onScroll() {
    Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
    window.pageYOffset >= elemOfScroll.offsetTop && (console.log("LOADED"), ymaps.ready(init), document.removeEventListener("scroll", onScroll))
}

function init() {
    myMap = new ymaps.Map("map", {
        center: [61.76, 94.64], controls: [], zoom: 4
    }), myMap.behaviors.disable(["scrollZoom", "drag", "rightMouseButtonMagnifier"]), cityes.forEach((e => {
        e.coors.split(" ")[0], e.coors.split(" ")[1];
        var t = new ymaps.Placemark([e.coors.split(" ")[0], e.coors.split(" ")[1]], {}, {
            iconLayout: "default#image",
            iconImageHref: "/img/mapPoint.svg",
            iconImageSize: [30, 42],
            iconImageOffset: [-3, -42]
        });
        t.events.add("click", (function (t) {
            myMap.behaviors.enable(["drag"]);
            var o = new ymaps.GeoObjectCollection;
            document.querySelector(".citySelectionSelected").innerHTML = "", document.querySelector(".citySelectionSelected").style.cssText = "display: grid;", document.querySelector(".citySelection").style.display = "none", myMap.setZoom(6), myMap.setCenter(t.get("target").geometry.getCoordinates()), t.get("target").options.set("visible", !1), document.querySelector(".mapUpperArrow").addEventListener("click", (function () {
                myMap.behaviors.disable(["scrollZoom", "drag", "rightMouseButtonMagnifier"]), o.removeAll(), myMap.setZoom(4), myMap.setCenter([61.76, 94.64]), document.querySelector(".citySelectionSelected").innerHTML = "", document.querySelector(".citySelection").style.display = "flex", cityes.forEach((e => {
                    e.coors.split(" ")[0], e.coors.split(" ")[1];
                    var t = new ymaps.Placemark([e.coors.split(" ")[0], e.coors.split(" ")[1]], {}, {
                        iconLayout: "default#image",
                        iconImageHref: "/img/mapPoint.svg",
                        iconImageSize: [30, 42],
                        iconImageOffset: [-3, -42]
                    });
                    t.events.add("click", (function (t) {
                        myMap.behaviors.enable(["drag"]), document.querySelector(".citySelectionSelected").innerHTML = "", document.querySelector(".citySelectionSelected").style.cssText = "display: grid;", document.querySelector(".citySelection").style.display = "none", myMap.setZoom(6), myMap.setCenter(t.get("target").geometry.getCoordinates()), t.get("target").options.set("visible", !1), mapCoors.forEach((t => {
                            if (t.region == e.title) {
                                var o = new ymaps.Placemark([t.Coors.split(", ")[0], t.Coors.split(", ")[1]], {}, {
                                    iconLayout: "default#image",
                                    iconImageHref: "/img/mapDestImg.svg",
                                    iconImageSize: [30, 42],
                                    iconImageOffset: [-3, -42]
                                });
                                o.events.add("click", (function (e) {
                                    myMap.setZoom(mapZoomDist), myMap.setCenter([t.Coors.split(", ")[0], t.Coors.split(", ")[1]]), document.querySelector(".citySelectionSelected").innerHTML = `\n                                    <div class="citySelectionSelectedItem">\n                                    <h4 class="citySelectionSelectedItemHeader">${t.Client}</h4>\n                                    <p class="citySelectionSelectedItemAdress">${t.region}, ${t.cityTitle}, ${t.adress}</p>\n                                    <div class="citySelectionSelectedItemHeaderContacts">\n                                        <p class="citySelectionSelectedItemContactsClosed" style="display: none;">\n                                            <span class="citySelectionSelectedItemContactsClosedTel">${t.phoneNumber}</span>\n                                        </p>\n                                        <p class="citySelectionSelectedItemContactsOpen" onclick="">Контакты\n                                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                                <path d="M1.82617 1L5.11617 4L8.40617 1" stroke="#BAC5DC" stroke-width="2" stroke-linecap="round"/>\n                                            </svg>\n                                        </p>\n                                    </div>\n                                </div>`
                                })), myMap.geoObjects.add(o), document.querySelector(".citySelectionSelected").innerHTML += `\n                            <div class="citySelectionSelectedItem">\n                            <h4 class="citySelectionSelectedItemHeader">${t.Client}</h4>\n                            <p class="citySelectionSelectedItemAdress">${t.region}, ${t.cityTitle}, ${t.adress}</p>\n                            <div class="citySelectionSelectedItemHeaderContacts">\n                                <p class="citySelectionSelectedItemContactsClosed" style="display: none;">\n                                    <span class="citySelectionSelectedItemContactsClosedTel">${t.phoneNumber}</span>\n                                </p>\n                                <p class="citySelectionSelectedItemContactsOpen" onclick="">Контакты\n                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                        <path d="M1.82617 1L5.11617 4L8.40617 1" stroke="#BAC5DC" stroke-width="2" stroke-linecap="round"/>\n                                    </svg>\n                                </p>\n                            </div>\n                        </div>\n                            `
                            }
                        }))
                    })), myMap.geoObjects.add(t)
                }))
            })), mapCoors.forEach((t => {
                if (t.region == e.title) {
                    var l = new ymaps.Placemark([t.Coors.split(", ")[0], t.Coors.split(", ")[1]], {}, {
                        iconLayout: "default#image",
                        iconImageHref: "/img/mapDestImg.svg",
                        iconImageSize: [30, 42],
                        iconImageOffset: [-3, -42]
                    });
                    l.events.add("click", (function (e) {
                        myMap.setZoom(mapZoomDist), myMap.setCenter([t.Coors.split(", ")[0], t.Coors.split(", ")[1]]), document.querySelector(".citySelectionSelected").innerHTML = `\n                            <div class="citySelectionSelectedItem">\n                            <h4 class="citySelectionSelectedItemHeader">${t.Client}</h4>\n                            <p class="citySelectionSelectedItemAdress">${t.region}, ${t.cityTitle}, ${t.adress}</p>\n                            <div class="citySelectionSelectedItemHeaderContacts">\n                                <p class="citySelectionSelectedItemContactsClosed" style="display: none;">\n                                    <span class="citySelectionSelectedItemContactsClosedTel">${t.phoneNumber}</span>\n                                </p>\n                                <p class="citySelectionSelectedItemContactsOpen" onclick="">Контакты\n                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                        <path d="M1.82617 1L5.11617 4L8.40617 1" stroke="#BAC5DC" stroke-width="2" stroke-linecap="round"/>\n                                    </svg>\n                                </p>\n                            </div>\n                        </div>\n                            `
                    })), o.add(l), document.querySelector(".citySelectionSelected").innerHTML += `\n                <div class="citySelectionSelectedItem">\n                <h4 class="citySelectionSelectedItemHeader">${t.Client}</h4>\n                <p class="citySelectionSelectedItemAdress">${t.region}, ${t.cityTitle}, ${t.adress}</p>\n                <div class="citySelectionSelectedItemHeaderContacts">\n                    <p class="citySelectionSelectedItemContactsClosed" style="display: none;">\n                        <span class="citySelectionSelectedItemContactsClosedTel">${t.phoneNumber}</span>\n                    </p>\n                    <p class="citySelectionSelectedItemContactsOpen" onclick="">Контакты\n                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">\n                            <path d="M1.82617 1L5.11617 4L8.40617 1" stroke="#BAC5DC" stroke-width="2" stroke-linecap="round"/>\n                        </svg>\n                    </p>\n                </div>\n            </div>\n                `
                }
                myMap.geoObjects.add(o)
            })), document.querySelectorAll(".citySelectionSelectedItemContactsOpen").forEach((e => {
                e.addEventListener("click", (function () {
                    "display: none;" == e.parentElement.children[0].style.cssText ? (e.innerHTML = 'Свернуть<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d = "M8.2334 5L4.9434 2L1.6534 5" stroke = "#869AC7" stroke - width="2" stroke - linecap="round" /></svg >', e.parentElement.children[0].style.cssText = "display: block;", e.parentElement.children[0].classList.add("openModalAnim"), e.parentElement.children[0].style.display = "block") : (e.innerHTML = 'Контакты<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.82617 1L5.11617 4L8.40617 1" stroke="#BAC5DC" stroke-width="2" stroke-linecap="round"/></svg>', e.parentElement.children[0].style.cssText = "", e.parentElement.children[0].classList.remove("openModalAnim"), e.parentElement.children[0].style.display = "none")
                }))
            }))
        })), myMap.geoObjects.add(t)
    })), cityesInit(myMap)
}

function cityesInit(e) {
    cityesArray = [], cityes.forEach((e => {
        cityesArray.push(e.title)
    })), cityesArray.sort(), cityesArray.forEach((t => {
        let o = document.createElement("p");
        o.classList.add("citySearchItem"), o.innerHTML = t, o.addEventListener("click", (function () {
            document.querySelector(".citySelectionSearchActive").classList.add("citySelectionSearch"), document.querySelector(".citySelectionSearchActive").classList.add("citySelectionSearchClose"), document.querySelector(".citySelectionSearchActive").classList.remove("citySelectionSearchActive");
            let o = new ymaps.GeoObjectCollection;
            e.setZoom(7), e.behaviors.enable(["drag"]), document.querySelector(".citySelection").style.cssText = "display: none;", cityes.forEach((o => {
                o.title == t && e.setCenter([o.coors.split(" ")[0], o.coors.split(" ")[1]])
            })), mapCoors.forEach((l => {
                if (l.region == t) {
                    let t = new ymaps.Placemark([l.Coors.split(", ")[0], l.Coors.split(", ")[1]], {}, {
                        iconLayout: "default#image",
                        iconImageHref: "/img/mapDestImg.svg",
                        iconImageSize: [30, 42],
                        iconImageOffset: [-3, -42]
                    });
                    t.events.add("click", (function (t) {
                        e.setZoom(mapZoomDist), e.setCenter([l.Coors.split(", ")[0], l.Coors.split(", ")[1]])
                    })), o.add(t), document.querySelector(".citySelectionSelected").style.cssText = "display: grid;", console.log("sdfsdfsdfsdfsd"), document.querySelector(".citySelectionSelected").innerHTML += `\n                        <div class="citySelectionSelectedItem" >\n                        <h4 class="citySelectionSelectedItemHeader"> ${l.Client}</h4>\n                        <p class="citySelectionSelectedItemAdress">${l.region}, ${l.cityTitle}, ${l.adress}</p>\n                        <div class="citySelectionSelectedItemHeaderContacts">\n                            <p class="citySelectionSelectedItemContactsClosed" style="display: none;">\n                                <span class="citySelectionSelectedItemContactsClosedTel">${l.phoneNumber}</span>\n                                \n                            </p>\n                            <p class="citySelectionSelectedItemContactsOpen" onclick="">Контакты\n                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                    <path d="M1.82617 1L5.11617 4L8.40617 1" stroke="#BAC5DC" stroke-width="2" stroke-linecap="round"/>\n                                </svg>\n                            </p>\n                        </div>\n                    </div>`
                }
                e.geoObjects.add(o)
            })), document.querySelectorAll(".citySelectionSelectedItemContactsOpen").forEach((e => {
                console.log(e.parentElement.children[0].style.display), e.addEventListener("click", (function () {
                    console.log(e.parentElement.children[0].style.cssText), "display: none;" == e.parentElement.children[0].style.cssText ? (e.innerHTML = 'Свернуть<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d = "M8.2334 5L4.9434 2L1.6534 5" stroke = "#869AC7" stroke - width="2" stroke - linecap="round" /></svg >', e.parentElement.children[0].style.cssText = "display: block;", e.parentElement.children[0].classList.add("openModalAnim"), e.parentElement.children[0].style.display = "block") : (e.innerHTML = 'Контакты<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.82617 1L5.11617 4L8.40617 1" stroke="#BAC5DC" stroke-width="2" stroke-linecap="round"/></svg>', e.parentElement.children[0].style.cssText = "", e.parentElement.children[0].classList.remove("openModalAnim"), e.parentElement.children[0].style.display = "none")
                }))
            })), document.querySelector(".mapUpperArrow").addEventListener("click", (function () {
                o.removeAll(), e.setZoom(4), e.setCenter([61.76, 94.64]), console.log("zoom"), document.querySelector(".citySelection").style.cssText = "", document.querySelector(".citySelectionSelected").innerHTML = ""
            }))
        })), document.querySelector(".citySelectionSearch").append(o)
    }))
}

function newCity(e) {
}

function searchClick(e) {
    e.target.innerHTML = '\n    Свернуть\n    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M8.2334 5L4.9434 2L1.6534 5" stroke="#869AC7" stroke-width="2" stroke-linecap="round"/>\n    </svg>\n    '
}

document.addEventListener("scroll", onScroll), document.querySelector(".citySelectionSearchSearch").addEventListener("input", (e => {
    let t = document.querySelector(".citySelectionSearchSearch").value.trim().toLowerCase(),
        o = document.querySelectorAll(".citySearchItem");
    console.log(o), "" != t ? o.forEach((e => {
        -1 == e.innerHTML.toLowerCase().search(t) && (e.style.cssText = "display: none;")
    })) : o.forEach((e => {
        e.style.cssText = ""
    }))
}));
const swiper = new Swiper(".swiperUpperSlider", {
    effect: "fade",
    fadeEffect: {crossFade: !0},
    lazy: !0,
    loop: !0,
    slidesPerView: 1,
    pagination: {el: ".swiper-pagination"},
    navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"}
});
let nowSlideOfUpperSlider = "chicken";

function swiperSlideInitModal() {
    document.querySelector("#modalTableUpperRow").innerHTML = "";
    let e = swiper.activeIndex;
    document.querySelectorAll(".slide").forEach(((t, o) => {
        o === e && (nowSlideOfUpperSlider = t.dataset.modalofslider)
    })), document.querySelector("#myModalTablePropertyes").innerHTML = "", propertyes.forEach((e => {
        if (e.title == nowSlideOfUpperSlider) {
            console.log(e);
            for (let t = 0; t < e.names.length; t += 1) console.log(t), console.log(e), document.querySelector("#modalTableUpperRow").innerHTML += `<p>${e.names[t]}</p>`;
            "goose" == e.title || "bird" == e.title ? (document.querySelector(".myModalTableItem").style.cssText = "grid-template-columns: 15vw 0.4fr 0.6fr 0.6fr;", e.prop.forEach((e => {
                let t = document.createElement("div");
                t.classList.add("modalTableItemMain"), t.classList.add("myModalTableItem"), t.classList.add("myModalTableItemBird"), t.innerHTML = `${null != e.bold ? `<strong>${null != e.title ? e.title : "-"}</strong>` : `<p>${null != e.title ? e.title : "-"}</p>`}<p>${null != e.unitsOfMeasurement ? e.unitsOfMeasurement : "-"}</p><p>${null != e.prestart ? e.prestart : "-"}</p><p>${null != e.start ? e.start : "-"}</p>`, document.querySelector("#myModalTablePropertyes").append(t)
            }))) : "rooster" == e.title ? (document.querySelector(".myModalTableItem").style.cssText = "grid-template-columns: 15vw 0.4fr 0.6fr 0.6fr 0.5fr;", e.prop.forEach((e => {
                let t = document.createElement("div");
                t.classList.add("modalTableItemMain"), t.classList.add("myModalTableItem"), t.classList.add("myModalTableItemRooster"), t.innerHTML = `${null != e.bold ? `<strong>${null != e.title ? e.title : "-"}</strong>` : `<p>${null != e.title ? e.title : "-"}</p>`}<p>${null != e.unitsOfMeasurement ? e.unitsOfMeasurement : "-"}</p><p>${null != e.prestart ? e.prestart : "-"}</p><p>${null != e.start ? e.start : "-"}</p><p>${null != e.growth ? e.growth : "-"}</p>`, document.querySelector("#myModalTablePropertyes").append(t)
            }))) : (document.querySelector(".myModalTableItem").style.cssText = "", e.prop.forEach((e => {
                let t = document.createElement("div");
                t.classList.add("modalTableItemMain"), t.classList.add("myModalTableItem"), t.innerHTML = `${null != e.bold ? `<strong>${null != e.title ? e.title : "-"}</strong>` : `<p>${null != e.title ? e.title : "-"}</p>`}<p>${null != e.unitsOfMeasurement ? e.unitsOfMeasurement : "-"}</p><p>${null != e.prestart ? e.prestart : "-"}</p><p>${null != e.start ? e.start : "-"}</p><p>${null != e.growth ? e.growth : "-"}</p><p>${null != e.finish ? e.finish : "-"}</p>`, document.querySelector("#myModalTablePropertyes").append(t)
            })))
        }
    }))
}

swiper.on("activeIndexChange", (function (e) {
    swiperSlideInitModal()
}));
const swiperManager = new Swiper(".swiperManager", {
    spaceBetween: 30, loop: !1, slidesPerView: 3, pagination: {el: ".swiper-pagination"}, autoplay: void 0
}), swiperArticles = new Swiper(".swiperArticles", {
    spaceBetween: 30, loop: !1, slidesPerView: 3, pagination: {el: ".swiper-pagination"}, autoplay: void 0
});

function calcScan() {
    /[^+\d]/gi.test(headesInp.innerHTML) ? (headesInpValue = headesInp.innerHTML.replace(/[^+\d]/gi, ""), headesInp.innerHTML = headesInpValue) : 0 == headesInp.innerHTML.split("")[0] || headesInp.innerHTML > 9999 ? headesInp.innerHTML = headesInpValue : (headesInpValue = headesInp.innerHTML, calcRes.innerHTML = "считаем...", setTimeout((e => {
        console.log(headesInpValue), console.log(calcCoof), console.log(calcCoofSr), console.log(calcCoofMin), console.log(calcCoofP);
        let t = 0;
        t = headesInpValue * calcCoof + headesInpValue * calcCoofSr + headesInpValue * calcCoofMin, "pig" == clickedAnimal || "rabbit" == clickedAnimal ? t += headesInpValue * calcCoofP : "goose" == clickedAnimal && (t -= headesInpValue * calcCoofSr), console.log(headesInpValue), console.log(t), isNaN(t) ? calcRes.innerHTML = "Зависит от условий" : (calcRes.innerHTML = t <= 1e3 ? t + "кг корма" : Math.floor(t / 1e3 * 100) / 100 + "т корма", newBlobRetext("#maxTextWeight", calcCoof), newBlobRetext("#srTextWeight", calcCoofSr), newBlobRetext("#minTextWeight", calcCoofMin), "pig" == clickedAnimal && newBlobRetext("#pBlobTextWeight", calcCoofP))
    }), 1e3))
}

function newBlobRetext(e, t) {
    isNaN(t) ? document.querySelector(`${e}`).innerHTML = t : document.querySelector(`${e}`).innerHTML = t * headesInpValue > 999 ? Math.round(t * headesInpValue * 100) / 100 / 1e3 + " т" : Math.round(t * headesInpValue * 100) / 100 + " кг"
}

let calcCoof = calcStart, calcCoofSr = calcStartSr, calcCoofMin = calcStartMin, calcCoofP = calcStartP,
    animalNow = "rooster", clickedAnimal = "rooster", headesInp = document.querySelector("#hadesInput"),
    headesInpValue = headesInp.innerHTML, calcRes = document.querySelector(".calcResult");
headesInp.setAttribute("contentEditable", !0);
let calc = setInterval((e => {
        headesInp.innerHTML == headesInpValue && animalNow == clickedAnimal || (console.log(animalNow), console.log(clickedAnimal), animalNow = clickedAnimal, console.log("af"), console.log(animalNow), console.log(clickedAnimal), calcScan(), calcInfo.forEach((e => {
            e.title == animalNow && console.log(headesInpValue + "\n" + e.max.weight)
        })), cattleTable())
    }), 100), calcBlobMax = document.querySelector("#max"), calcBlobMin = document.querySelector("#min"),
    calcBlobSr = document.querySelector("#sr"), pBlob = document.querySelector("#pBlob"),
    maxCalcText = document.querySelector("#maxText"), minCalcText = document.querySelector("#minText"),
    srCalcText = document.querySelector("#srText"), nowCalcEl = document.querySelector(".calcForBlob"),
    calcVarWrappers = document.querySelectorAll(".calcForBlob");

function fontsCalc() {
    document.querySelector("#maxTextWeight").setAttribute("font-size", "6vh"), document.querySelector("#maxTextDays").setAttribute("font-size", "3.4vh"), document.querySelector("#srTextWeight").setAttribute("font-size", "7vh"), document.querySelector("#srTextDays").setAttribute("font-size", "4.4vh"), document.querySelector("#minTextWeight").setAttribute("font-size", "7vh"), document.querySelector("#maxTextText").setAttribute("font-size", "2.4vh"), document.querySelector("#maxTextText").setAttribute("font-weight", "bold"), document.querySelector("#maxTextDays").setAttribute("font-weight", "bold"), document.querySelector("#maxTextDays").setAttribute("y", "27vh"), document.querySelector(".calcImgsResultSteps").removeEventListener("click", cattleBlobClick), document.querySelector(".calcImgsResultSteps").style.cssText += "cursor: auto;"
}

function cattleMaxClick() {
    console.log("cattleMaxClick")
}

function calcBlobsRetext(e, t) {
    isNaN(e) ? document.querySelector(`#${t}`).innerHTML = e : document.querySelector(`#${t}`).innerHTML = e * headesInpValue > 999 ? Math.floor(e * headesInpValue / 100 * 100) / 100 + " т" : e * headesInpValue * 100 / 100 + " кг"
}

function calcFontsRegFourK() {
    document.querySelector(".calcImgsResultSteps").querySelectorAll("svg").forEach((e => {
        console.log(e.querySelectorAll("text")), e.querySelectorAll("text").forEach((e => {
            e.setAttribute("font-size", Number(e.getAttribute("font-size").split("vh")[0]) - Number(e.getAttribute("font-size").split("vh")[0] / 2) + "vh"), e.setAttribute("x", Number(e.getAttribute("x").split("vw")[0]) / 2 + "vw"), e.setAttribute("y", Number(e.getAttribute("y").split("vh")[0]) / 2 + "vh")
        }))
    }))
}

function calcVarWraps() {
    calcVarWrappers.forEach((e => {
        console.log(e.parentElement), e.parentElement.addEventListener("click", (t => {
            console.log(t.target.children[0]), nowCalcEl.setAttribute("fill", "#A9B6D7");
            let o = document.querySelector(".calcPoint");
            window.innerWidth >= 2100 ? o.style.cssText += `position: absolute; top: ${t.target.children[0].parentElement.parentElement.offsetTop + 60}px; left: ${t.target.children[0].parentElement.parentElement.offsetLeft + 67}px` : o.style.cssText += `position: absolute; top: ${t.target.children[0].parentElement.parentElement.offsetTop}px; left: ${t.target.children[0].parentElement.parentElement.offsetLeft + 7}px`, document.querySelector(".calcPointAnim").setAttribute("dur", "1000ms"), nowCalcEl = t.target.children[0], nowCalcEl.setAttribute("fill", "#F9F9FC"), nowCalcEl.setAttribute("fill-opacity", "1"), calcInfo.forEach((t => {
                e.dataset.animal == t.title && (clickedAnimal = e.dataset.animal, "pig" == clickedAnimal && (calcCoofP = t.pBlob.coof, calcCoofMin = t.min.coof, calcCoofSr = t.sr.coof, calcCoof = t.max.coof), calcCoof = t.max.coof, void 0 === calcCoof && (calcCoof = t.max.weight, void 0 === calcCoof && (calcCoof = 0)), calcCoofSr = t.sr.coof, void 0 === calcCoofSr && (calcCoofSr = t.sr.weight, void 0 === calcCoofSr && (calcCoofSr = 0)), calcCoofMin = t.min.coof, console.log("calcCoofMin"), console.log(typeof calcCoofMin), console.log(void 0 === calcCoofMin), void 0 === calcCoofMin && (calcCoofMin = t.min.weight, void 0 === calcCoofMin && (calcCoofMin = 0)), console.log(t), console.log(headesInpValue), console.log(calcCoof), console.log(calcCoofSr), console.log(calcCoofMin), console.log(calcCoofP), document.querySelector(".calcImg").style.opacity = 0, calcBlobMax.style.opacity = 0, calcBlobMin.style.opacity = 0, calcBlobSr.style.opacity = 0, pBlob.style.opacity = 0, setTimeout((e => {
                    document.querySelector(".calcImg").setAttribute("src", `/img/calc/${t.img}`), document.querySelector(".calcImg").style.cssText += `margin-top: ${t.mt}vh; margin-left: ${t.mr}vw;`, t.width ? document.querySelector(".calcImg").style.cssText += `width: ${t.width}%` : document.querySelector(".calcImg").style.cssText += "width: 60%", document.querySelector(".calcImg").style.opacity = 1, t.pBlob ? (pBlob.style.opacity = 1, calcBlobMin.style.cssText = "right: 43vw;top: 264.6vh;", document.querySelector("#minTexts").style.cssText = "right: 53vw;top: 288.6vh;", calcBlobSr.style.cssText = "right: 34vw; top: 239vh;", pBlob.style.cssText = "mobile" != device ? "display: block;top: 302.6vh;right: 29vw;" : "display: block;", document.querySelector("#pBlobTextWeight").innerHTML = `${t.pBlob.weight}`, document.querySelector("#pBlobTextText").innerHTML = `${t.pBlob.text}`, document.querySelector("#pBlobTextDays").innerHTML = `${t.pBlob.daysMax}`) : (document.querySelector("#minTexts").style.cssText = "", calcBlobMin.style.cssText = "", calcBlobSr.style.cssText = "", pBlob.style.cssText = "display: none"), !0 === t.max.vis && (document.querySelector("#maxTextDays").innerHTML = `>${t.max.days} дней`, document.querySelector("#maxTextText").innerHTML = `${t.max.text}`, calcBlobMax.style.opacity = 1), !0 === t.sr.vis ? (document.querySelector("#srTextText").innerHTML = `${t.sr.text}`, document.querySelector("#srTextDays").innerHTML = t.sr.daysMin + " - " + t.sr.daysMax + " дней", calcBlobSr.style.opacity = 1, document.querySelector("#srTexts").style.opacity = 1) : (calcBlobSr.style.opacity = 0, document.querySelector("#srTexts").style.opacity = 0), !0 === t.min.vis ? (document.querySelector("#minTextText").innerHTML = `${t.min.text}`, document.querySelector("#minTextDays").innerHTML = "0 - " + t.min.daysMax + " дней", calcBlobMin.style.opacity = 1, document.querySelector("#minTexts").style.opacity = 1) : (calcBlobMin.style.opacity = 0, document.querySelector("#minTexts").style.opacity = 0), 2 == t.blobs ? (document.querySelector(".maxCalcTexts").style.cssText = "", document.querySelector("#max").style.cssText = "", calcBlobMin.style.cssText = "width: 25vw; height: 25vw; top: 283vh;", document.querySelector("#minTexts").style.cssText = "    right: 38vw;top: 280.6vh;", calcBlobMax.style.cssText = "width: 31vw; height: 31vw;", "mobile" != device ? document.querySelector("#maxTextWeight").setAttribute("x", "9vw") : (calcBlobMin.style.cssText = "width: 25vh; height: 25vh; top: 600vh; left: -10vw", calcBlobMax.style.cssText = "width: 31vh; height: 31vh;"), document.querySelector("#maxTextWeight").setAttribute("font-size", "6vh"), fontsCalc()) : 1 == t.blobs ? (document.querySelector("#minTexts").style.cssText = "opacity: 0;", calcBlobMax.style.cssText = "mobile" != device ? "width: 51vw; height: 51vw; top: 292vh;" : "width: 51vh; height: 51vh; top: 593vh;", document.querySelector("#maxTextWeight").setAttribute("font-size", "4vh"), document.querySelector("#maxTextText").setAttribute("font-size", "1.4vh"), document.querySelector("#maxTextDays").setAttribute("font-size", "1.4vh"), document.querySelector("#maxTextText").setAttribute("font-weight", "300"), document.querySelector("#maxTextDays").setAttribute("font-weight", "300"), document.querySelector(".maxCalcTexts").style.cssText = "margin-top: 10vh; margin-left: 6vw;", document.querySelector("#maxTextWeight").innerHTML = "148-200 кг", document.querySelector("#maxTextText").innerHTML = "Подробная схема", document.querySelector("#maxTextDays").innerHTML = "кормления телят>", document.querySelector(".calcImgsResultSteps").style.cssText += "cursor: pointer;", document.querySelector(".calcImgsResultSteps").addEventListener("click", cattleMaxClick)) : 4 == t.blobs ? (document.querySelector("#minTexts").style.cssText = "right: 54vw;", document.querySelector(".maxCalcTexts").style.cssText = "", document.querySelector("#max").style.cssText = "", document.querySelector(".calcImgsResultSteps").style.cssText += "cursor: auto;", document.querySelector("#maxTextDays").innerHTML = `${t.max.days}`, document.querySelector("#maxTextText").innerHTML = `${t.max.text}`, document.querySelector("#srTextText").innerHTML = `${t.sr.text}`, document.querySelector("#srTextDays").innerHTML = t.sr.daysMax, document.querySelector("#minTextText").innerHTML = `${t.min.text}`, document.querySelector("#minTextDays").innerHTML = t.min.daysMax, document.querySelector("#maxTextWeight").setAttribute("font-size", "4vh"), document.querySelector("#maxTextDays").setAttribute("font-size", "2.8vh"), document.querySelector("#srTextWeight").setAttribute("font-size", "4vh"), document.querySelector("#srTextDays").setAttribute("font-size", "4vh"), document.querySelector("#minTextWeight").setAttribute("font-size", "5vh"), document.querySelector("#max").style.cssText = "top: 292vh;", "rabbit" == t.title ? (document.querySelector(".maxCalcTexts").style.cssText = "", document.querySelector("#maxTextWeight").setAttribute("font-size", "4vh")) : (document.querySelector(".maxCalcTexts").style.cssText = "", document.querySelector("#maxTextWeight").setAttribute("font-size", "6vh")), document.querySelector("#maxTextText").setAttribute("font-size", "2.4vh"), document.querySelector("#maxTextText").setAttribute("font-weight", "bold"), document.querySelector("#maxTextDays").setAttribute("font-weight", "bold"), document.querySelector("#maxTextDays").setAttribute("y", "27vh"), document.querySelector(".calcImgsResultSteps").removeEventListener("click", cattleBlobClick), "mobile" != device ? (calcBlobMin.style.cssText = "right: 44vw; top: 292vh", calcBlobMax.style.cssText = "", calcBlobSr.style.cssText = "top: 267vh;right: 34vw;", document.querySelector("#maxTextWeight").setAttribute("x", "9vw")) : (document.querySelector("#minTextWeight").setAttribute("font-size", "5.9vh"), document.querySelector("#minTextText").setAttribute("font-size", "4.9vh"), calcBlobMin.style.cssText = "right: 73vw;top: 617vh;", calcBlobMax.style.cssText = "", calcBlobSr.style.cssText = "top: 600vh;right: 62vw;")) : (document.querySelector("#minTexts").style.cssText = "", document.querySelector(".maxCalcTexts").style.cssText = "", document.querySelector("#max").style.cssText = "", fontsCalc(), calcBlobMin.style.cssText = "", calcBlobMax.style.cssText = "", "mobile" != device && document.querySelector("#maxTextWeight").setAttribute("x", "9vw"), document.querySelector("#maxTextWeight").setAttribute("font-size", "6vh")), calcScan()
                }), 600))
            })), setTimeout((function () {
                document.querySelector(".calcPointAnim").setAttribute("dur", "10s")
            }), 400), window.innerWidth > 3799 && calcFontsRegFourK()
        })), e.addEventListener("click", (t => {
            console.log(t.target), nowCalcEl.setAttribute("fill", "#A9B6D7");
            let o = document.querySelector(".calcPoint");
            window.innerWidth >= 3200 ? o.style.cssText += `position: absolute; top: ${t.target.parentElement.parentElement.offsetTop + 30}px; left: ${t.target.parentElement.parentElement.offsetLeft + 37}px` : o.style.cssText += `position: absolute; top: ${t.target.parentElement.parentElement.offsetTop}px; left: ${t.target.parentElement.parentElement.offsetLeft + 7}px`, document.querySelector(".calcPointAnim").setAttribute("dur", "1000ms"), nowCalcEl = t.target, nowCalcEl.setAttribute("fill", "#F9F9FC"), nowCalcEl.setAttribute("fill-opacity", "1"), calcInfo.forEach((t => {
                e.dataset.animal == t.title && (clickedAnimal = e.dataset.animal, "pig" == clickedAnimal && (calcCoofP = t.pBlob.coof, calcCoofMin = t.min.coof, calcCoofSr = t.sr.coof, calcCoof = t.max.coof), calcCoof = t.max.coof, void 0 === calcCoof && (calcCoof = t.max.weight, void 0 === calcCoof && (calcCoof = 0)), calcCoofSr = t.sr.coof, void 0 === calcCoofSr && (calcCoofSr = t.sr.weight, void 0 === calcCoofSr && (calcCoofSr = 0)), calcCoofMin = t.min.coof, console.log("calcCoofMin"), console.log(typeof calcCoofMin), console.log(void 0 === calcCoofMin), void 0 === calcCoofMin && (calcCoofMin = t.min.weight, void 0 === calcCoofMin && (calcCoofMin = 0)), console.log(t), console.log(headesInpValue), console.log(calcCoof), console.log(calcCoofSr), console.log(calcCoofMin), console.log(calcCoofP), document.querySelector(".calcImg").style.opacity = 0, calcBlobMax.style.opacity = 0, calcBlobMin.style.opacity = 0, calcBlobSr.style.opacity = 0, pBlob.style.opacity = 0, setTimeout((e => {
                    document.querySelector(".calcImg").setAttribute("src", `/img/calc/${t.img}`), document.querySelector(".calcImg").style.cssText += `margin-top: ${t.mt}vh; margin-left: ${t.mr}vw;`, t.width ? document.querySelector(".calcImg").style.cssText += `width: ${t.width}%` : document.querySelector(".calcImg").style.cssText += "width: 60%", document.querySelector(".calcImg").style.opacity = 1, t.pBlob ? (pBlob.style.opacity = 1, calcBlobMin.style.cssText = "right: 43vw;top: 264.6vh;", document.querySelector("#minTexts").style.cssText = "right: 53vw;top: 288.6vh;", calcBlobSr.style.cssText = "right: 34vw; top: 239vh;", pBlob.style.cssText = "mobile" != device ? "display: block;top: 302.6vh;right: 29vw;" : "display: block;", document.querySelector("#pBlobTextWeight").innerHTML = `${t.pBlob.weight}`, document.querySelector("#pBlobTextText").innerHTML = `${t.pBlob.text}`, document.querySelector("#pBlobTextDays").innerHTML = `${t.pBlob.daysMax}`) : (document.querySelector("#minTexts").style.cssText = "", calcBlobMin.style.cssText = "", calcBlobSr.style.cssText = "", pBlob.style.cssText = "display: none"), !0 === t.max.vis && (document.querySelector("#maxTextDays").innerHTML = `>${t.max.days} дней`, document.querySelector("#maxTextText").innerHTML = `${t.max.text}`, calcBlobMax.style.opacity = 1), !0 === t.sr.vis ? (document.querySelector("#srTextText").innerHTML = `${t.sr.text}`, document.querySelector("#srTextDays").innerHTML = t.sr.daysMin + " - " + t.sr.daysMax + " дней", calcBlobSr.style.opacity = 1, document.querySelector("#srTexts").style.opacity = 1) : (calcBlobSr.style.opacity = 0, document.querySelector("#srTexts").style.opacity = 0), !0 === t.min.vis ? (document.querySelector("#minTextText").innerHTML = `${t.min.text}`, document.querySelector("#minTextDays").innerHTML = "0 - " + t.min.daysMax + " дней", calcBlobMin.style.opacity = 1, document.querySelector("#minTexts").style.opacity = 1) : (calcBlobMin.style.opacity = 0, document.querySelector("#minTexts").style.opacity = 0), 2 == t.blobs ? (document.querySelector(".maxCalcTexts").style.cssText = "", document.querySelector("#max").style.cssText = "", calcBlobMin.style.cssText = "width: 25vw; height: 25vw; top: 283vh;", document.querySelector("#minTexts").style.cssText = "    right: 38vw;top: 280.6vh;", calcBlobMax.style.cssText = "width: 31vw; height: 31vw;", "mobile" != device ? document.querySelector("#maxTextWeight").setAttribute("x", "9vw") : (calcBlobMin.style.cssText = "width: 25vh; height: 25vh; top: 600vh; left: -10vw", calcBlobMax.style.cssText = "width: 31vh; height: 31vh;"), document.querySelector("#maxTextWeight").setAttribute("font-size", "6vh"), fontsCalc()) : 1 == t.blobs ? (document.querySelector("#minTexts").style.cssText = "opacity: 0;", calcBlobMax.style.cssText = "mobile" != device ? "width: 51vw; height: 51vw; top: 292vh;" : "width: 51vh; height: 51vh; top: 593vh;", document.querySelector("#maxTextWeight").setAttribute("font-size", "4vh"), document.querySelector("#maxTextText").setAttribute("font-size", "1.4vh"), document.querySelector("#maxTextDays").setAttribute("font-size", "1.4vh"), document.querySelector("#maxTextText").setAttribute("font-weight", "300"), document.querySelector("#maxTextDays").setAttribute("font-weight", "300"), document.querySelector(".maxCalcTexts").style.cssText = "margin-top: 10vh; margin-left: 6vw;", document.querySelector("#maxTextWeight").innerHTML = "148-200 кг", document.querySelector("#maxTextText").innerHTML = "Подробная схема", document.querySelector("#maxTextDays").innerHTML = "кормления телят>", document.querySelector(".calcImgsResultSteps").style.cssText += "cursor: pointer;", document.querySelector(".calcImgsResultSteps").addEventListener("click", cattleMaxClick)) : 4 == t.blobs ? (document.querySelector("#minTexts").style.cssText = "right: 54vw;", document.querySelector(".maxCalcTexts").style.cssText = "", document.querySelector("#max").style.cssText = "", document.querySelector(".calcImgsResultSteps").style.cssText += "cursor: auto;", document.querySelector("#maxTextDays").innerHTML = `${t.max.days}`, document.querySelector("#maxTextText").innerHTML = `${t.max.text}`, document.querySelector("#srTextText").innerHTML = `${t.sr.text}`, document.querySelector("#srTextDays").innerHTML = t.sr.daysMax, document.querySelector("#minTextText").innerHTML = `${t.min.text}`, document.querySelector("#minTextDays").innerHTML = t.min.daysMax, document.querySelector("#maxTextWeight").setAttribute("font-size", "4vh"), document.querySelector("#maxTextDays").setAttribute("font-size", "2.8vh"), document.querySelector("#srTextWeight").setAttribute("font-size", "4vh"), document.querySelector("#srTextDays").setAttribute("font-size", "4vh"), document.querySelector("#minTextWeight").setAttribute("font-size", "5vh"), document.querySelector("#max").style.cssText = "top: 292vh;", "rabbit" == t.title ? (document.querySelector(".maxCalcTexts").style.cssText = "", document.querySelector("#maxTextWeight").setAttribute("font-size", "4vh")) : (document.querySelector(".maxCalcTexts").style.cssText = "", document.querySelector("#maxTextWeight").setAttribute("font-size", "6vh")), document.querySelector("#maxTextText").setAttribute("font-size", "2.4vh"), document.querySelector("#maxTextText").setAttribute("font-weight", "bold"), document.querySelector("#maxTextDays").setAttribute("font-weight", "bold"), document.querySelector("#maxTextDays").setAttribute("y", "27vh"), document.querySelector(".calcImgsResultSteps").removeEventListener("click", cattleBlobClick), "mobile" != device ? (calcBlobMin.style.cssText = "right: 44vw; top: 292vh", calcBlobMax.style.cssText = "", calcBlobSr.style.cssText = "top: 267vh;right: 34vw;", document.querySelector("#maxTextWeight").setAttribute("x", "9vw")) : (document.querySelector("#minTextWeight").setAttribute("font-size", "5.9vh"), document.querySelector("#minTextText").setAttribute("font-size", "4.9vh"), calcBlobMin.style.cssText = "right: 73vw;top: 617vh;", calcBlobMax.style.cssText = "", calcBlobSr.style.cssText = "top: 600vh;right: 62vw;")) : (document.querySelector("#minTexts").style.cssText = "", document.querySelector(".maxCalcTexts").style.cssText = "", document.querySelector("#max").style.cssText = "", fontsCalc(), calcBlobMin.style.cssText = "", calcBlobMax.style.cssText = "", "mobile" != device && document.querySelector("#maxTextWeight").setAttribute("x", "9vw"), document.querySelector("#maxTextWeight").setAttribute("font-size", "6vh")), calcScan()
                }), 600))
            })), setTimeout((function () {
                document.querySelector(".calcPointAnim").setAttribute("dur", "10s")
            }), 400), window.innerWidth > 3799 && calcFontsRegFourK()
        }))
    }))
}

function newCalc() {
    headesInp.addEventListener("change", (function () {
        console.log("changeInp")
    })), calcVarWrappers.forEach((e => {
        console.log(e.parentElement), e.addEventListener("click", (t => {
            console.log(t.target.children[0]), nowCalcEl.setAttribute("fill", "#A9B6D7");
            let o = document.querySelector(".calcPoint");
            window.innerWidth >= 3200 ? o.style.cssText += `position: absolute; top: ${t.target.parentElement.parentElement.offsetTop + 30}px; left: ${t.target.parentElement.parentElement.offsetLeft + 37}px` : o.style.cssText += `position: absolute; top: ${t.target.parentElement.parentElement.offsetTop}px; left: ${t.target.parentElement.parentElement.offsetLeft + 7}px`, document.querySelector(".calcPointAnim").setAttribute("dur", "1000ms"), nowCalcEl = t.target, nowCalcEl.setAttribute("fill", "#F9F9FC"), nowCalcEl.setAttribute("fill-opacity", "1"), calcInfo.forEach((t => {
                e.dataset.animal == t.title && (document.querySelector(".calcImg").setAttribute("src", `/img/calc/${t.img}`), clickedAnimal = e.dataset.animal, "pig" == clickedAnimal && (calcCoofP = t.pBlob.coof, calcCoofMin = t.min.coof, calcCoofSr = t.sr.coof, calcCoof = t.max.coof), calcCoof = t.max.coof, void 0 === calcCoof && (calcCoof = t.max.weight, void 0 === calcCoof && (calcCoof = 0)), calcCoofSr = t.sr.coof, void 0 === calcCoofSr && (calcCoofSr = t.sr.weight, void 0 === calcCoofSr && (calcCoofSr = 0)), calcCoofMin = t.min.coof, console.log("calcCoofMin"), console.log(typeof calcCoofMin), console.log(void 0 === calcCoofMin), void 0 === calcCoofMin && (calcCoofMin = t.min.weight, void 0 === calcCoofMin && (calcCoofMin = 0)), console.log(t), console.log(headesInpValue), console.log(calcCoof), console.log(calcCoofSr), console.log(calcCoofMin), console.log(calcCoofP), newBlobRetext("#maxTextWeight", calcCoof), newBlobRetext("#srTextWeight", calcCoofSr), newBlobRetext("#minTextWeight", calcCoofMin), document.querySelector("#maxTextText").innerHTML = t.max.text, document.querySelector("#srTextText").innerHTML = t.sr.text, document.querySelector("#minTextText").innerHTML = t.min.text, document.querySelector("#maxTextDays").innerHTML = t.max.days + " дней", document.querySelector("#srTextDays").innerHTML = `${t.sr.daysMin} - ${t.sr.daysMax} дней`, document.querySelector("#minTextDays").innerHTML = "0 - " + t.min.daysMax + " дней", t.pBlob && (document.querySelector("#pBlobTextWeight").innerHTML = t.pBlob.weight, document.querySelector("#pBlobTextText").innerHTML = t.pBlob.text, document.querySelector("#pBlobTextDays").innerHTML = t.pBlob.daysMax), "pig" == clickedAnimal ? (document.querySelector("#maxTextDays").innerHTML = t.max.days, document.querySelector("#srTextDays").innerHTML = t.sr.daysMax, document.querySelector("#minTextDays").innerHTML = t.min.daysMax) : "rabbit" == clickedAnimal && (document.querySelector("#maxTextWeight").innerHTML = "От условий", document.querySelector("#srTextWeight").innerHTML = "От условий", document.querySelector("#minTextWeight").innerHTML = "От условий", document.querySelector("#maxTextDays").innerHTML = t.max.days, document.querySelector("#srTextDays").innerHTML = t.sr.daysMax, document.querySelector("#minTextDays").innerHTML = t.min.daysMax))
            })), console.log(animalNow), document.querySelector(".srBlobWrapper").parentElement.style.cssText = "opacity:0;", document.querySelector(".maxBlWrapper").parentElement.style.cssText = "opacity:0;", document.querySelector(".minBlobWrapper").parentElement.style.cssText = "opacity:0;", document.querySelector(".calcImg").style.cssText = "opacity:0;", setTimeout((function () {
                document.querySelector(".srBlobWrapper").parentElement.style.cssText = "opacity:1;", document.querySelector(".maxBlWrapper").parentElement.style.cssText = "opacity:1;", document.querySelector(".minBlobWrapper").parentElement.style.cssText = "opacity:1;", document.querySelector(".calcImg").style.cssText = "opacity:1;", console.log(typeof cattleBlobClick + " " + animalNow), "cattle" == animalNow ? (console.log("sdfsdfsdfsdf"), document.querySelector(".minBlobWrapper").parentElement.style.cssText = "", document.querySelector(".pblobCalcTexts").style = "display: none", document.querySelector(".maxBlWrapper").parentElement.style.cssText = "grid-column-start: 1; grid-column-end: 1;grid-row-start: 1; grid-row-end: 4;cursor:pointer;", document.querySelector(".maxBlWrapper").addEventListener("click", cattleBlobClick), console.log("evList"), "mobile" == device && (document.querySelector(".maxBlWrapper").style.cssText += "width: 92%;"), document.querySelector(".minBlobWrapper").parentElement.style.cssText = "display:none;", document.querySelector(".srBlobWrapper").parentElement.style.cssText = "display:none;", document.querySelector(".calcImgWrapper").style.cssText = "grid-row-start: 1;align-items: center;justify-content: center;grid-row-end: 3;", document.querySelector("#maxTextDays").innerHTML = "", document.querySelector("#maxTextWeight").style.fontSize = "2vw", "mobile" == device && (document.querySelector("#maxTextWeight").style.fontSize = "18px"), document.querySelector("#srTextWeight").style.fontSize = "", document.querySelector("#minTextWeight").style.fontSize = "") : "goose" == animalNow ? (document.querySelector(".maxBlWrapper").removeEventListener("click", cattleBlobClick), "mobile" == device && (document.querySelector(".minBlobWrapper").style.cssText = "height: 100%; width: 93%", document.querySelector(".maxBlWrapper").style.cssText = "height: 100%; width: 93%"), document.querySelector(".minBlobWrapper").parentElement.style.cssText = "", document.querySelector(".pblobCalcTexts").style = "display: none", document.querySelector(".srBlobWrapper").parentElement.style.cssText = "opacity:0;", document.querySelector(".maxBlWrapper").parentElement.style.cssText = "", document.querySelector(".minBlobWrapper").parentElement.style.cssText = "", document.querySelector(".calcImgWrapper").style.cssText = "", document.querySelector("#maxTextWeight").style.fontSize = "", document.querySelector("#maxTextWeight").style.fontSize = "", document.querySelector("#srTextWeight").style.fontSize = "", document.querySelector("#minTextWeight").style.fontSize = "") : "pig" == animalNow ? (document.querySelector(".maxBlWrapper").removeEventListener("click", cattleBlobClick), document.querySelector(".minBlobWrapper").parentElement.style.cssText = "grid-template-columns: 3fr 1fr", document.querySelector(".minBlobWrapper").style.cssText = "width: 12vw !important; height: 12vw !important;", "mobile" == device && (document.querySelector(".minBlobWrapper").parentElement.style.cssText = "height: 200%; width: 100%;", document.querySelector(".pblobCalcTexts").style.cssText = "width: 100%; height: 100%;", document.querySelector(".maxBlWrapper").style.cssText = "width: 82% !important;", document.querySelector(".srBlobWrapper").style.cssText = "width: 82% !important;", document.querySelector(".minBlobWrapper").style.cssText = "width: 82% !important;", document.querySelector(".pblobCalcTexts").style.cssText = "width: 82% !important;"), document.querySelector(".pblobCalcTexts").style = "", document.querySelector(".maxBlWrapper").parentElement.style.cssText = "", document.querySelector(".srBlobWrapper").parentElement.style.cssText = "", document.querySelector(".calcImgWrapper").style.cssText = "", document.querySelector("#maxTextWeight").style.fontSize = "", document.querySelector("#maxTextWeight").style.fontSize = "", document.querySelector("#srTextWeight").style.fontSize = "", document.querySelector("#minTextWeight").style.fontSize = "", document.querySelector("#pBlobTextWeight").style.fontSize = "") : "rabbit" == animalNow ? (document.querySelector(".maxBlWrapper").removeEventListener("click", cattleBlobClick), document.querySelector(".minBlobWrapper").style.cssText = "width: 12vw !important; height: 12vw !important;", document.querySelector(".minBlobWrapper").parentElement.style.cssText = "grid-template-columns: 3fr 1fr", document.querySelector(".pblobCalcTexts").style = "", document.querySelector("#maxTextWeight").style.fontSize = "2vw", document.querySelector("#srTextWeight").style.fontSize = "1.6vw", document.querySelector("#minTextWeight").style.fontSize = "1.2vw", document.querySelector("#pBlobTextWeight").style.fontSize = "1.5vw", "mobile" == device && (document.querySelector(".minBlobWrapper").parentElement.style.cssText = "height: 200%; width: 100%;", document.querySelector(".pblobCalcTexts").style.cssText = "width: 100%; height: 100%;", document.querySelector("#maxTextWeight").style.fontSize = "3vw", document.querySelector("#srTextWeight").style.fontSize = "2.6vw", document.querySelector("#minTextWeight").style.fontSize = "2.1vw", document.querySelector("#pBlobTextWeight").style.fontSize = "2.5vw")) : (document.querySelector(".maxBlWrapper").removeEventListener("click", cattleBlobClick), console.log("sdfsdfsdfsdf"), document.querySelector(".minBlobWrapper").style.cssText = "", document.querySelector(".maxBlWrapper").style.cssText = "", document.querySelector(".minBlobWrapper").parentElement.style.cssText = "", document.querySelector(".pblobCalcTexts").style = "display: none;", document.querySelector(".maxBlWrapper").parentElement.style.cssText = "", document.querySelector(".minBlobWrapper").parentElement.style.cssText = "", document.querySelector(".srBlobWrapper").parentElement.style.cssText = "", document.querySelector(".calcImgWrapper").style.cssText = "", document.querySelector("#maxTextWeight").style.fontSize = "", document.querySelector("#maxTextWeight").style.fontSize = "", document.querySelector("#srTextWeight").style.fontSize = "", document.querySelector("#minTextWeight").style.fontSize = "", document.querySelector(".maxBlWrapper").style.cssText = "", document.querySelector(".srBlobWrapper").style.cssText = "", document.querySelector(".minBlobWrapper").style.cssText = "")
            }), 1e3), "cattle" != animalNow && (console.log(typeof cattleBlobClick), document.querySelector(".calcImgsResultSteps").removeEventListener("click", cattleBlobClick)), document.querySelector(".calcPointAnim").setAttribute("dur", "10000ms")
        }))
    }))
}

newCalc();
let dotsOfMySlider = document.querySelector(".dotsOfMySlider"), mySlider = document.querySelector(".blobOfMySlider"),
    slidesCountOfMySlider = 3, mySliderImgs = ["/img/aboutImg/1.webp", "/img/aboutImg/2.webp", "/img/aboutImg/3.webp"],
    dotAct = document.createElement("div");
dotAct.classList.add("myDot"), dotAct.classList.add("myDotActive"), dotAct.addEventListener("click", (e => {
    document.querySelector(".myDotActive").classList.remove("myDotActive"), e.target.classList.add("myDotActive"), document.querySelector("#imgOfMySlider").setAttribute("href", mySliderImgs[0])
})), dotsOfMySlider.append(dotAct);
for (let e = 0; e < slidesCountOfMySlider - 1; e += 1) {
    let t = document.createElement("div");
    t.classList.add("myDot"), t.addEventListener("click", (t => {
        console.log("dotClick"), document.querySelector(".myDotActive").classList.remove("myDotActive"), t.target.classList.add("myDotActive"), document.querySelector("#imgOfMySlider").setAttribute("href", mySliderImgs[e + 1])
    })), dotsOfMySlider.append(t)
}
let parallaxState = !1;

function parallax(e) {
    if (!parallaxState) {
        parallaxState = !0;
        let t = document.querySelector(".parallaxPig");
        t.setAttribute("x", e.clientX / 100), t.setAttribute("y", e.clientY / 100)
    }
    setTimeout((e => {
        parallaxState = !1
    }), 1200)
}

function nextSlideSliderOfArticles() {
    swiperArticles.slideNext()
}

function prevSlideSliderOfArticles() {
    swiperArticles.slidePrev()
}

function openModalPesonal() {
    document.querySelector("#personalModal").classList.add("openModalAnim"), document.querySelector("#personalModal").style.display = "grid", setTimeout((e => {
        document.querySelector("#personalModal").classList.remove("openModalAnim")
    }), 600)
}

function closeModalPesonal() {
    document.querySelector("#personalModal").classList.add("closeModalAnim"), setTimeout((e => {
        document.querySelector("#personalModal").style.display = "none", document.querySelector("#personalModal").classList.remove("closeModalAnim")
    }), 600)
}

function openModalCattle() {
    document.querySelector(".cattleModal").classList.add("openModalAnim"), document.querySelector(".cattleModal").style.display = "grid", setTimeout((e => {
        document.querySelector(".cattleModal").classList.remove("openModalAnim")
    }), 600)
}

function closeModalCattle() {
    document.querySelector(".cattleModal").classList.add("closeModalAnim"), setTimeout((e => {
        document.querySelector(".cattleModal").style.display = "none", document.querySelector(".cattleModal").classList.remove("closeModalAnim")
    }), 600)
}

function openModal() {
    document.querySelector("#modalOfSliderWrapper").classList.add("openModalAnim"), document.querySelector("#modalOfSliderWrapper").style.display = "grid", setTimeout((e => {
        document.querySelector("#modalOfSliderWrapper").classList.remove("openModalAnim")
    }), 600)
}

function closeModal() {
    document.querySelector("#modalOfSliderWrapper").classList.add("closeModalAnim"), setTimeout((e => {
        document.querySelector("#modalOfSliderWrapper").style.display = "none", document.querySelector("#modalOfSliderWrapper").classList.remove("closeModalAnim")
    }), 600)
}

document.addEventListener("mousemove", parallax), document.querySelector(".articleSliderNext").addEventListener("click", nextSlideSliderOfArticles), document.querySelector(".articleSliderPrev").addEventListener("click", prevSlideSliderOfArticles), document.querySelector(".managerSliderPrev").addEventListener("click", (function () {
    swiperManager.slidePrev()
})), document.querySelector(".managerSliderNext").addEventListener("click", (function () {
    swiperManager.slideNext()
})), document.querySelector("#modalOfSliderWrapper").style.display = "grid", document.querySelector("#closeModalOfSliderBtn").style.cssText = `transform: translate(${window.screen.width - document.querySelector(".myModalTable").clientWidth + document.querySelector(".myModalTable").clientWidth / 2 + 60}px, 2vh);`, document.querySelector("#modalOfSliderWrapper").style.display = "none", document.querySelector("#closeModalOfSliderBtn").addEventListener("click", closeModal), document.querySelectorAll(".slideBtnMore").forEach((e => {
    e.setAttribute("onclick", "openModal()")
})), swiperSlideInitModal();
let circledBtns = document.querySelectorAll(".circledBtns");
document.querySelector(".citySelection").addEventListener("click", openCitySearch);
let openCitySearchState = !1, search = document.querySelector(".citySelectionSearch");

function openCitySearch() {
    openCitySearchState ? (search.classList.remove("citySelectionSearchActive"), search.classList.add("citySelectionSearch"), search.classList.add("citySelectionSearchClose")) : (search.classList.remove("citySelectionSearchClose"), search.classList.remove("citySelectionSearch"), search.classList.add("citySelectionSearchActive")), openCitySearchState = !openCitySearchState
}

function adapt() {
    if (window.innerWidth > 1920 && window.innerWidth <= 3799) document.querySelector("main").style.cssText = "display: grid; grid-template-columns: 1fr 5fr 1fr;"; else if (window.innerWidth <= 721) {
        device = "mobile";
        let e = !1;
        document.querySelector(".header").addEventListener("click", (t => {
            e ? (t.target.querySelector(".headerMobBurger").innerHTML = '<rect width="30" height="4" rx="2" fill="#30529F"/>\n                <rect y="7" width="30" height="4" rx="2" fill="#30529F"/>\n                <rect y="14" width="30" height="4" rx="2" fill="#30529F"/>\n            ', e = !1, document.querySelector(".headerMobNav").classList.toggle("headerMobNavOpen"), document.querySelector(".headerMobNav").classList.toggle("headerMobNavClose")) : (t.target.querySelector(".headerMobBurger").innerHTML = '<rect y="18.2131" width="30" height="3" rx="2" transform="rotate(-45 0 21.2131)" fill="#30529F"></rect>\n                <rect x="0.82861" width="30" height="3" rx="2" transform="rotate(45 2.82861 0)" fill="#30529F"></rect>\n            ', e = !0, document.querySelector(".headerMobNav").classList.toggle("headerMobNavOpen"), document.querySelector(".headerMobNav").classList.toggle("headerMobNavClose"))
        })), document.querySelector(".headerMobBurger").addEventListener("click", (t => {
            e ? (t.target.innerHTML = '<rect width="30" height="4" rx="2" fill="#30529F"/>\n                <rect y="7" width="30" height="4" rx="2" fill="#30529F"/>\n                <rect y="14" width="30" height="4" rx="2" fill="#30529F"/>\n            ', e = !1, document.querySelector(".headerMobNav").classList.toggle("headerMobNavOpen"), document.querySelector(".headerMobNav").classList.toggle("headerMobNavClose")) : (t.target.innerHTML = '<rect y="18.2131" width="30" height="3" rx="2" transform="rotate(-45 0 21.2131)" fill="#30529F"></rect>\n                <rect x="0.82861" width="30" height="3" rx="2" transform="rotate(45 2.82861 0)" fill="#30529F"></rect>\n            ', e = !0, document.querySelector(".headerMobNav").classList.toggle("headerMobNavOpen"), document.querySelector(".headerMobNav").classList.toggle("headerMobNavClose"))
        })), document.querySelectorAll(".headerMobNavListItem").forEach((t => {
            t.addEventListener("click", (function () {
                document.querySelector(".headerMobBurger").innerHTML = '<rect width="30" height="4" rx="2" fill="#30529F"/>\n                <rect y="7" width="30" height="4" rx="2" fill="#30529F"/>\n                <rect y="14" width="30" height="4" rx="2" fill="#30529F"/>\n            ', e = !1, document.querySelector(".headerMobNav").classList.toggle("headerMobNavOpen"), document.querySelector(".headerMobNav").classList.toggle("headerMobNavClose")
            }))
        })), document.querySelector("main").style.cssText = "display: grid; grid-template-columns: 1fr 5fr 1fr;", document.querySelectorAll("#notM").forEach((e => {
            e.remove()
        })), swiperArticles.params.slidesPerView = 1, swiperArticles.update(), swiperManager.params.slidesPerView = 1, swiperManager.update();
        let t = document.querySelector(".mySlider"), o = t.cloneNode(), l = t.innerHTML;
        t.remove(), console.log(o), document.querySelector("#aboutUs").append(o), document.querySelector(".mySlider").innerHTML = l, console.log(document.querySelector(".myDot")), document.querySelectorAll(".myDot").forEach(((e, t) => {
            e.addEventListener("click", (e => {
                console.log(document.querySelector(".dotsOfMySlider").childElementCount), document.querySelector("#imgOfMySlider").setAttribute("href", mySliderImgs[t]), document.querySelector(".myDotActive").classList.remove("myDotActive"), e.target.classList.toggle("myDotActive")
            }))
        }));
        let c = [];
        document.querySelector(".swiper-wrapper").querySelectorAll(".swiper-slide").forEach((e => {
            c.push(e.dataset.swiperSlideIndex);
            let t = e.querySelector(".slide").querySelector(".slideBl").querySelector(".slideAbout").querySelector(".dots"),
                o = t.cloneNode();
            o.style.cssText = "margin-left: 28%; margin-right: 28%;margin-top: -8vh;", o.innerHTML = t.innerHTML, e.querySelector(".slide").prepend(o), t.remove(), console.log(e.querySelector(".slide").querySelector(".slideBl").querySelector(".slideAbout").querySelector(".dots")), console.log(t)
        }))
    } else window.innerWidth > 3799 && (calcFontsRegFourK(), document.querySelector("main").style.cssText = "display: grid; grid-template-columns: 1fr 5fr 1fr;");
    window.innerWidth
}

adapt(), window.addEventListener("resize", adapt);
let closedModalForm = !1;

function send(e, t) {
    console.log(e), console.log(e.target[2].value), console.log("Отправка запроса"), e.preventDefault ? e.preventDefault() : e.returnValue = !1;
    var o = new XMLHttpRequest;
    o.open("POST", t, !0), o.onload = function () {
        o.status >= 200 && o.status < 400 ? (json = JSON.parse(this.response), console.log(json), "success" == json.result ? (console.log(e.target[2].value), e.target[2].value == successFormInpVals[0] ? (document.querySelector(".mapModalHeaderSuccess").innerHTML = successFormTitles[0], document.querySelector(".mapModalTextSuccess").innerHTML = successFormTexts[0], document.querySelector(".mapModalHeaderSuccess").style.cssText = "font-size: 1.9vw") : e.target[2].value == successFormInpVals[1] ? (document.querySelector(".mapModalHeaderSuccess").innerHTML = successFormTitles[1], document.querySelector(".mapModalTextSuccess").innerHTML = successFormTexts[1]) : e.target[2].value == successFormInpVals[2] && (document.querySelector(".mapModalHeaderSuccess").innerHTML = successFormTitles[2], document.querySelector(".mapModalTextSuccess").innerHTML = successFormTexts[2]), closeAnyModal("mapAdminModal")) : (document.querySelector(".mapModalHeaderSuccess").innerHTML = "Ошибка :(", document.querySelector(".mapModalTextSuccess").innerHTML = "Ошибка. Повторите попытку или попробуйте позднее."), closeAnyModal("modalOfMapWrapper"), openAnyModal("modalOfMapWrapperSuccess")) : (document.querySelector(".mapModalHeaderSuccess").innerHTML = "Ошибка :(", document.querySelector(".mapModalTextSuccess").innerHTML = "Ошибка сервера. Повторите попытку или попробуйте позднее.", closeAnyModal("modalOfMapWrapper"), openAnyModal("modalOfMapWrapperSuccess"))
    }, o.onerror = function () {
        alert("Ошибка отправки запроса")
    }, o.send(new FormData(e.target))
}

successFormInpVals = ["До 1 тонны", "От 1 до 20 тонн", "Более 20 тонн"], successFormTitles = ["Свяжитесь с нашими дистрибьютерами.", "Спасибо!", "Отлично, спасибо!"], successFormTexts = ["Такое количество корма будет удобнее всего заказать у нашего официального дистрибьютера. Найдите подходящий вариант на нашей карте. Мы собрали не только адреса, но контакты поставщиков.", "Мы передали письмо менеджерам, но продукция объемом до 20 тонн уже может быть у официальных дистрибьютеров в вашем регионе. Всю необходимую информацию вы можете найти на карте.", "В ближайшее время наши менеджеры свяжутся с Вами для уточнения деталей заказа и дальнейшего сотрудничества."], document.querySelector(".mapModalForm").addEventListener("submit", (e => {
    e.preventDefault(), console.log(document.querySelector(".mapModalCheckbox").checked), 1 == document.querySelector("#mapFormCheckBoxOfPersonal").checked ? send(e, "send.php") : document.querySelector(".mapModalCheckboxLable").style.cssText = "color: #ff4545"
})), document.querySelector(".closeModalOfMapBtn").addEventListener("click", (e => {
    document.querySelector(".modalOfMapWrapper").style.cssText = closedModalForm ? "" : "display: none;"
})), document.querySelector(".mapAdminlink").addEventListener("click", (e => {
    e.preventDefault(), openAnyModal("modalOfMapWrapper")
})), document.querySelector(".closeModalOfMapBtn").addEventListener("click", (e => {
    closeAnyModal("modalOfMapWrapper")
})), document.querySelector(".closeModalOfMapBtnSuccess").addEventListener("click", (e => {
    console.log("close"), closeAnyModal("modalOfMapWrapperSuccess")
})), document.querySelector(".mapModalbtnSuccess").addEventListener("click", (e => {
    console.log("close"), closeAnyModal("modalOfMapWrapperSuccess")
}));
let modalOfMapCounter = 0;

function openAnyModal(e) {
    if (document.querySelector("." + e).style.cssText = "", document.querySelector("." + e).classList.add("openModalAnim"), "modalOfMap" == document.querySelector("." + e).getAttribute("id") && modalOfMapCounter < 1) {
        console.log("classOfModal"), modalOfMapCounter += 1;
        let e = [];
        cityes.forEach((t => {
            e.push(t.title)
        })), e.sort(), e.forEach((e => {
            document.querySelector("#mapModalRegion").innerHTML += `<option value="${e}">${e}</option>`
        }))
    }
}

function closeAnyModal(e) {
    document.querySelector("." + e).classList.add("closeModalAnim"), setTimeout((function () {
        document.querySelector("." + e).style.cssText = "display: none;"
    }), 600)
}

document.querySelectorAll(".dots").forEach((e => {
    e.childNodes.forEach(((e, t) => {
        "#text" != e.nodeName && e.addEventListener("click", (e => {
            let o = Math.floor(t / 2) + 1;
            swiper.slideTo(o, 500)
        }))
    })), console.log(e.childNodes)
})), document.querySelector(".swiperManager").querySelector(".swiper-wrapper").innerHTML = "", managersList.forEach(((e, t) => {
    let o = Math.round(30 * Math.random() + 10);
    console.log(o), document.querySelector(".swiperManager").querySelector(".swiper-wrapper").innerHTML += `\n    \n    <div class="swiper-slide swiperArticlesSlide swiperManagerSlide">\n    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" id="blobSvg" style="opacity: 1;">\n    <image class="" x="0" y="0" width="100%" height="100%" clip-path="url(#shapeArticle${t})" xlink:href="./img/managers/${e.photo}" preserveAspectRatio="none"></image>\n            </image>\n            <clipPath id="shapeArticle${t}">\n            <path id="blob" fill="url(#gradient)" style="opacity: 1;">\n                <animate attributeName="d" dur="${o}s" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;">\n            </animate>\n        </path>\n        </clipPath>\n        </svg>\n        <h4 class="swiperArticlesSlideHeader">\n            ${e.name}\n        </h4>\n        <p class="swiperManagerSlideDate swiperManagerSlideDateAbout">\n            ${e.about}\n        </p>\n        <p class="swiperManagerSlideDate swiperManagerSlideDatePhone">\n            ${e.phone}\n        </p>\n        <p class="swiperManagerSlideDate">\n            ${e.email}\n        </p>\n    </div>\n    `
})), document.querySelector("#closeModalOfSliderBtnPersonal").style.cssText = "position: absolute;transform: translate(80vw, 3vh);", document.querySelector("#closeModalOfSliderBtnCattle").style.cssText = "position: absolute;transform: translate(76vw, -33vh);", document.querySelector("#closeModalOfSliderBtnCattle").addEventListener("click", closeModalCattle);
let cattleTableInfo = [{min: .35, max: 1.5}, {min: 1.3, max: 2}, {min: 1.5, max: 2.5}, {min: 2, max: 3}, {
    min: 1.5, max: 1.5
}, {min: 1, max: 1}, {min: .5, max: .5}];

function cattleTable() {
    let e = 0;
    document.querySelectorAll(".myModalTableItemCattle").forEach((t => {
        if ("" != t.children[3].innerHTML) {
            if (-1 != t.children[3].innerHTML.indexOf("-")) {
                t.children[3].innerHTML.split("-");
                t.children[3].innerHTML = headesInpValue * cattleTableInfo[e].min + "-" + cattleTableInfo[e].max * headesInpValue, console.log(e)
            } else t.children[3].innerHTML = headesInpValue * cattleTableInfo[e].min;
            e += 1
        }
    }))
}

cattleTable(), document.querySelector(".personalSuccessFooter").addEventListener("click", (e => {
    openModalPesonal()
})), document.querySelector("#closeModalOfSliderBtnPersonal").addEventListener("click", (e => {
    closeModalPesonal()
}));