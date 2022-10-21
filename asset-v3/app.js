/* 0.5.0 2022-08-00 00:00:00 */
var app = new function() {
    this.name = "Augury", this.version = "3", this.date = "2022", this.folder = "asset-v3/", this.looptime = 6400, this.bpm = 150, this.totalframe = 350, this.nbpolo = 7, this.nbloopbonus = 6, this.bonusloopA = !0, this.bonusendloopA = !1, this.recmaxloop = 27, this.recminloop = 4, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#170723", this.col0 = "#573C6A", this.col1 = "#422758", this.col2 = "#2E1642", this.col3 = "#241036", this.col4 = "#170723", this.animearray = [{
        name: "1_boxie",
        color: "293562",
        uniqsnd: !1
    }, {
        name: "2_screws",
        color: "293562",
        uniqsnd: !1
    }, {
        name: "3_tiky",
        color: "293562",
        uniqsnd: !1
    }, {
        name: "4_chester",
        color: "293562",
        uniqsnd: !1
    }, {
        name: "5_skull",
        color: "293562",
        uniqsnd: !0
    }, {
        name: "6_bass",
        color: "953630",
        uniqsnd: !1
    }, {
        name: "7_bonky",
        color: "953630",
        uniqsnd: !0
    }, {
        name: "8_atm",
        color: "953630",
        uniqsnd: !1
    }, {
        name: "9_mike",
        color: "953630",
        uniqsnd: !1
    }, {
        name: "10_bricks",
        color: "953630",
        uniqsnd: !1
    }, {
        name: "11_luis",
        color: "67497C",
        uniqsnd: !1
    }, {
        name: "12_candles",
        color: "67497C",
        uniqsnd: !1
    }, {
        name: "13_christal",
        color: "67497C",
        uniqsnd: !0
    }, {
        name: "14_guard",
        color: "67497C",
        uniqsnd: !1
    }, {
        name: "15_potion",
        color: "67497C",
        uniqsnd: !1
    }, {
        name: "16_souls",
        color: "476876",
        uniqsnd: !1
    }, {
        name: "17_demon",
        color: "476876",
        uniqsnd: !1
    }, {
        name: "18_jack",
        color: "476876",
        uniqsnd: !1
    }, {
        name: "19_loan",
        color: "476876",
        uniqsnd: !1
    }, {
        name: "20_hehe",
        color: "476876",
        uniqsnd: !1
    }], this.bonusarray = [{
        name: "Tour",
        src: "v3-b1-tour-hb.mp4",
        code: "1,4,6,9,10",
        sound: "21_bonus_tour",
        aspire: "aspire"
    }, {
        name: "Reveal",
        src: "v3-b2-reveal-hb.mp4",
        code: "1,5,6,14,19",
        sound: "22_bonus_reveal",
        aspire: "aspire"
    }, {
        name: "Airline",
        src: "v3-b3-airline-hb.mp4",
        code: "1,6,13,17,18",
        sound: "23_bonus_airline",
        aspire: "aspire"
    }];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var i = this.animearray[n].name;
        this.animearray[n].soundA = i + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? i + "_a" : i + "_b", this.animearray[n].anime = i + "-sprite.png", this.animearray[n].animeData = i + ".json"
    }
};