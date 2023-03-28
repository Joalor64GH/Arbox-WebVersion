/* 0.4.0 2023-02-00 00:00:00 */
var app = new function() {
    this.name = "Armed", this.version = "4", this.date = "2023", this.folder = "asset-v4/", this.looptime = 9600, this.bpm = 100, this.totalframe = 488, this.nbpolo = 7, this.nbloopbonus = 8, this.bonusloopA = !0, this.bonusendloopA = !4, this.recmaxloop = 34, this.recminloop = 4, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#3F1609", this.col0 = "#D9A222", this.col1 = "#C2861F", this.col2 = "#9E6319", this.col3 = "#834516", this.col4 = "#662C11", this.animearray = [{
        name: "1_kami",
        color: "90580C",
        uniqsnd: !0
    }, {
        name: "2_theo",
        color: "90580C",
        uniqsnd: !0
    }, {
        name: "3_cambor",
        color: "90580C",
        uniqsnd: !0
    }, {
        name: "4_spikes",
        color: "90580C",
        uniqsnd: !0
    }, {
        name: "5_ladon",
        color: "90580C",
        uniqsnd: !0
    }, {
        name: "6_mike",
        color: "82131A",
        uniqsnd: !0
    }, {
        name: "7_jarry",
        color: "82131A",
        uniqsnd: !0
    }, {
        name: "8_tourette",
        color: "82131A",
        uniqsnd: !0
    }, {
        name: "9_chewer",
        color: "82131A",
        uniqsnd: !0
    }, {
        name: "10_nimbus",
        color: "82131A",
        uniqsnd: !0
    }, {
        name: "11_rammy",
        color: "A8175A",
        uniqsnd: !0
    }, {
        name: "12_hikari",
        color: "A8175A",
        uniqsnd: !0
    }, {
        name: "13_velda",
        color: "A8175A",
        uniqsnd: !0
    }, {
        name: "14_tromby",
        color: "A8175A",
        uniqsnd: !0
    }, {
        name: "15_felipe",
        color: "A8175A",
        uniqsnd: !0
    }, {
        name: "16_larry",
        color: "2B8E89",
        uniqsnd: !0
    }, {
        name: "17_branko",
        color: "2B8E89",
        uniqsnd: !0
    }, {
        name: "18_lester",
        color: "2B8E89",
        uniqsnd: !1
    }, {
        name: "19_explorer",
        color: "2B8E89",
        uniqsnd: !0
    }, {
        name: "20_hawk",
        color: "2B8E89",
        uniqsnd: !1
    }], this.bonusarray = [{
        name: "Newcomer",
        src: "newcomer_bonus-hb.mp4",
        code: "1,2,12,14,17",
        sound: "bonus-newcomer",
        aspire: "aspire"
    }, {
        name: "The Virus",
        src: "the_virus_bonus-hb.mp4",
        code: "1,2,11,15,19",
        sound: "bonus-the_virus",
        aspire: "reunion-aspire"
    }, {
        name: "Freedom",
        src: "freedom_bonus-hb.mp4",
        code: "6,12,13,15,17",
        sound: "bonus-freedom",
        aspire: "aspire"
    }];
    for (var o = 0, n = this.animearray.length; o < n; o++) {
        var e = this.animearray[o].name;
        this.animearray[o].soundA = e + "_a", this.animearray[o].soundB = this.animearray[o].uniqsnd ? e + "_a" : e + "_b", this.animearray[o].anime = e + "-sprite.png", this.animearray[o].animeData = e + ".json"
    }
};
