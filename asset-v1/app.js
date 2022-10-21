/* 0.5.4 2021-12-04 18:40:10 */
var app = new function() {
    this.name = "The Invasion", this.version = "1", this.date = "2021", this.folder = "asset-v1/", this.looptime = 6857, this.bpm = 140, this.totalframe = 324, this.nbpolo = 7, this.nbloopbonus = 6, this.bonusloopA = !0, this.bonusendloopA = !1, this.recmaxloop = 27, this.recminloop = 4, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#506884", this.col0 = "#42566D", this.col1 = "#506884", this.col2 = "#506884", this.col3 = "#506884", this.col4 = "#506884", this.animearray = [{
        name: "1_tomtom",
        color: "506884",
        uniqsnd: !0
    }, {
        name: "2_kahkah",
        color: "506884",
        uniqsnd: !0
    }, {
        name: "3_tunka",
        color: "506884",
        uniqsnd: !0
    }, {
        name: "4_trikah",
        color: "506884",
        uniqsnd: !0
    }, {
        name: "5_tikitaka",
        color: "506884",
        uniqsnd: !0
    }, {
        name: "6_bass",
        color: "506884",
        uniqsnd: !1
    }, {
        name: "7_pologram",
        color: "506884",
        uniqsnd: !0
    }, {
        name: "8_pahpuh",
        color: "506884",
        uniqsnd: !0
    }, {
        name: "9_timer",
        color: "506884",
        uniqsnd: !0
    }, {
        name: "10_electro",
        color: "506884",
        uniqsnd: !0
    }, {
        name: "11_metro",
        color: "506884",
        uniqsnd: !1
    }, {
        name: "12_victor",
        color: "506884",
        uniqsnd: !1
    }, {
        name: "13_pututu",
        color: "506884",
        uniqsnd: !0
    }, {
        name: "14_mogmo",
        color: "506884",
        uniqsnd: !1
    }, {
        name: "15_stars",
        color: "506884",
        uniqsnd: !0
    }, {
        name: "16_pobop",
        color: "506884",
        uniqsnd: !0
    }, {
        name: "17_lead",
        color: "506884",
        uniqsnd: !1
    }, {
        name: "18_survivor",
        color: "506884",
        uniqsnd: !0
    }, {
        name: "19_frank",
        color: "506884",
        uniqsnd: !0
    }, {
        name: "20_gogo",
        color: "506884",
        uniqsnd: !0
    }], this.bonusarray = [{
        name: "Updating",
        src: "v1-b1-updating-hb.mp4",
        code: "1,5,6,8,12",
        sound: "21_bonus_updating",
        aspire: "aspire"
    }, {
        name: "Discoveries",
        src: "v1-b2-discoveries-hb.mp4",
        code: "1,4,10,14,19",
        sound: "22_bonus_discoveries",
        aspire: "aspire"
    }];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var a = this.animearray[n].name;
        this.animearray[n].soundA = a + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b", this.animearray[n].anime = a + "-sprite.png", this.animearray[n].animeData = a + ".json"
    }
};