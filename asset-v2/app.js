/* 0.5.0 2022-02-02 00:00:00 */
var app = new function() {
    this.name = "Airline", this.version = "2", this.date = "2022", this.folder = "asset-v2/", this.looptime = 6400, this.bpm = 110, this.totalframe = 328, this.nbpolo = 7, this.nbloopbonus = 6, this.bonusloopA = !0, this.bonusendloopA = !1, this.recmaxloop = 27, this.recminloop = 4, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#581845", this.col0 = "#FF5733", this.col1 = "#C70039", this.col2 = "#C70039", this.col3 = "#900C3F", this.col4 = "#581845", this.animearray = [{
        name: "1_staffell",
        color: "900C3F",
        uniqsnd: !0
    }, {
        name: "2_mike",
        color: "900C3F",
        uniqsnd: !0
    }, {
        name: "3_conductor",
        color: "900C3F",
        uniqsnd: !0
    }, {
        name: "4_baulk",
        color: "900C3F",
        uniqsnd: !0
    }, {
        name: "5_bandage",
        color: "900C3F",
        uniqsnd: !0
    }, {
        name: "6_bass",
        color: "43BFC7",
        uniqsnd: !1
    }, {
        name: "7_shotter",
        color: "43BFC7",
        uniqsnd: !0
    }, {
        name: "8_coop",
        color: "43BFC7",
        uniqsnd: !0
    }, {
        name: "9_detector",
        color: "43BFC7",
        uniqsnd: !0
    }, {
        name: "10_concan",
        color: "43BFC7",
        uniqsnd: !0
    }, {
        name: "11_plimb",
        color: "BA68C8",
        uniqsnd: !0
    }, {
        name: "12_key",
        color: "BA68C8",
        uniqsnd: !0
    }, {
        name: "13_cosmo",
        color: "BA68C8",
        uniqsnd: !1
    }, {
        name: "14_bullo",
        color: "BA68C8",
        uniqsnd: !0
    }, {
        name: "15_richguy",
        color: "BA68C8",
        uniqsnd: !1
    }, {
        name: "16_sunset",
        color: "C35817",
        uniqsnd: !0
    }, {
        name: "17_takeoff",
        color: "C35817",
        uniqsnd: !0
    }, {
        name: "18_choir",
        color: "C35817",
        uniqsnd: !1
    }, {
        name: "19_jack",
        color: "C35817",
        uniqsnd: !0
    }, {
        name: "20_yeah",
        color: "C35817",
        uniqsnd: !0
    }], this.bonusarray = [{
        name: "Airport",
        src: "v2-b1-airport-hb.mp4",
        code: "1,4,6,12,16",
        sound: "21_bonus_airport",
        aspire: "aspire"
    }, {
        name: "Ravage",
        src: "v2-b2-ravage-hb.mp4",
        code: "2,5,8,9,13",
        sound: "22_bonus_ravage",
        aspire: "aspire"
    }, {
        name: "Clash",
        src: "v2-b3-clash-hb.mp4",
        code: "2,4,10,15,18",
        sound: "23_bonus_clash",
        aspire: "aspire"
    }];
    for (var o = 0, n = this.animearray.length; o < n; o++) {
        var i = this.animearray[o].name;
        this.animearray[o].soundA = i + "_a", this.animearray[o].soundB = this.animearray[o].uniqsnd ? i + "_a" : i + "_b", this.animearray[o].anime = i + "-sprite.png", this.animearray[o].animeData = i + ".json"
    }
};