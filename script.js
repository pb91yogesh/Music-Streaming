new Vue({
    el: "#app",
    data() {
        return {
            audio: null,
            circleLeft: null,
            barWidth: null,
            duration: null,
            currentTime: null,
            isTimerPlaying: false,
            tracks: [
                {
                    name: "Dhokha",
                    artist: "Jassie Gill",
                    cover: "https://github.com/yogeshpcte/image/raw/main/Dhokha.jpg",
                    source: "https://github.com/yogeshpcte/song/raw/main/Jassie%20Gill%20_%20Dhokha%20(Official%20Song)%20Simar%20Kaur%20Latest%20Punjabi%20New%20Punjabi%20Song%202021%20Melody%20Music.mp3",
                    url: "https://youtu.be/_yJ6gqN2JTY",
                    favorited:false
                    
                },
                {
                    name: "What Ve",
                    artist: "Diljit Dosanjh",
                    cover: "https://raw.githubusercontent.com/yogeshpcte/image/main/Diljit%20Dosanjh%20What%20Ve.jpg",
                    source: "https://github.com/yogeshpcte/song/raw/main/Diljit%20Dosanjh_%20What%20Ve%20OFFICIAL%20VIDEO%20_%20Nimrat%20Khaira%20_%20Arjan%20Dhillon%20_%20Desi%20Crew%20_%20Baljit%20Deo.mp3",
                    url: "https://youtu.be/x0Fx047Db_s",
                    favorited:true
                },
                {
                    name: "Mithi Mithi",
                    artist: "Gurnam Bhullar & Mannat Noor",
                    cover: "https://github.com/yogeshpcte/image/raw/main/MithiMithi.jpeg",
                    source: "https://github.com/yogeshpcte/song/raw/main/Mithi%20Mithi%20_%20Gurnam%20Bhullar%20_%20Mannat%20Noor%20_%20New%20Punjabi%20Songs%202021%20_%20Latest%20Punjabi%20Song%202021.mp3",
                    url: "https://youtu.be/LWSP8NWML6A",
                    favorited:false
                },
                {
                    name: "Top Notch Gabru",
                    artist: "Vicky",
                    cover: "https://a10.gaanacdn.com/gn_img/albums/JD2KJyAbOL/2KJyvL5lbO/size_xxl_1624626465.webp",
                    source: "https://github.com/yogeshpcte/song/blob/main/Top%20Notch%20Gabru%20(Full%20Video)%20Vicky%20I%20%20Proof%20_%20Kaptaan%20_%20Latest%20Punjabi%20Songs%202021%20Rehaan%20Records.mp3?raw=true",
                    url: "https://youtu.be/OaEpjCWHY38",
                    favorited: false
                },
                {
                    name: " IT AIN'T LEGAL",
                    artist: "KARAN AUJLA",
                    cover: "https://kiddaan.com/wp-content/uploads/2021/10/It-Aint-Legal-Review-web.jpg",
                    source: "https://github.com/yogeshpcte/song/blob/main/KARAN%20AUJLA%20_%20IT%20AIN'T%20LEGAL%20_%20Gurlej%20Akhtar%20_%20Tru-Skool%20_%20Rupan%20Bal%20_%20Latest%20Punjabi%20Songs%202021.mp3?raw=true",
                    url: "https://youtu.be/e8a4YuRgGdU",
                    favorited: true
                },
                {
                    name: "Churi ",
                    artist: "Khan Bhaini & Shipra Goyal",
                    cover: "https://github.com/yogeshpcte/song/raw/main/23264.jpg",
                    source: "https://github.com/yogeshpcte/song/blob/main/Churi%20(HD%20Video)%20Khan%20Bhaini%20Ft%20Shipra%20Goyal%20_%20Latest%20Punjabi%20Songs%202021%20_%20New%20Punjabi%20Songs%202021.mp3?raw=true",
                    url: "https://www.youtube.com/watch?v=ICjyAe9S54c",
                    favorited: false
                },
                {
                    name: "WAJAH TUM HO",
                    artist: "Arman Malik",
                    cover: "https://raw.githubusercontent.com/yogeshpcte/song/main/WhatsApp%20Image%202021-10-08%20at%206.30.52%20PM.jpeg",
                    source: "https://github.com/yogeshpcte/song/blob/main/WhatsApp%20Audio%202021-10-08%20at%206.30.47%20PM.mpeg?raw=true",
                    url: "https://youtu.be/Tmhegcz_PBQ",
                    favorited: true
                },
                {
                    name: "Bad Boy Life",
                    artist: " Preet Aujla",
                    cover: "https://i.ytimg.com/vi/Vj9QzoWJbbg/maxresdefault.jpg",
                    source: "https://github.com/yogeshpcte/song/blob/main/Bad%20Boy%20Life%20_%20Preet%20Aujla%20(Feat)%20Mr%20Dree%20_%20Music%20Mr.Penduz%20_%20Latest%20Punjabi%20Song%202021.mp3?raw=true",
                    url: "https://youtu.be/Vj9QzoWJbbg",
                    favorited: false
                },
                {
                    name: "Jawani",
                    artist: " Khan Bhaini Karan Aujla ",
                    cover: "https://raw.githubusercontent.com/yogeshpcte/song/main/Jawani.jpg",
                    source: "https://github.com/yogeshpcte/song/blob/main/Jawani%20Khan%20Bhaini%20Churi%20(Official%20Video)%20New%20Song%20Karan%20Aujla%20Latest%20Punjabi%20Songs%202021%20New%20Punjabi.mp3?raw=true",
                    url: "https://youtu.be/rxF6vrsANFY",
                    favorited: true
                },
                {
                    name: "",
                    artist: "",
                    cover: "",
                    source: "",
                    url: "",
                    favorited: true
                },
                {
                    name: "",
                    artist: "",
                    cover: "",
                    source: "",
                    url: "",
                    favorited: true
                },
                {
                    name: "",
                    artist: "",
                    cover: "",
                    source: "",
                    url: "",
                    favorited: true
                },
                {
                    name: "",
                    artist: "",
                    cover: "",
                    source: "",
                    url: "",
                    favorited: true
                },
                {
                    name: "",
                    artist: "",
                    cover: "",
                    source: "",
                    url: "",
                    favorited: true
                },
                {
                    name: "",
                    artist: "",
                    cover: "",
                    source: "",
                    url: "",
                    favorited: true
                },
                {
                    name: "",
                    artist: "",
                    cover: "",
                    source: "",
                    url: "",
                    favorited: true
                },
                {
                    name: "",
                    artist: "",
                    cover: "",
                    source: "",
                    url: "",
                    favorited: true
                },
                {
                    name: "",
                    artist: "",
                    cover: "",
                    source: "",
                    url: "",
                    favorited: true
                },
                {
                    name: "",
                    artist: "",
                    cover: "",
                    source: "",
                    url: "",
                    favorited: true
                },
                {
                    name: "",
                    artist: "",
                    cover: "",
                    source: "",
                    url: "",
                    favorited: true
                },
                {
                    name: "",
                    artist: "",
                    cover: "",
                    source: "",
                    url: "",
                    favorited: true
                },
                {
                    name: "",
                    artist: "",
                    cover: "",
                    source: "",
                    url: "",
                    favorited: true
                },
                {
                    name: "",
                    artist: "",
                    cover: "",
                    source: "",
                    url: "",
                    favorited: true
                },
                {
                    name: "",
                    artist: "",
                    cover: "",
                    source: "",
                    url: "",
                    favorited: true
                },
                {
                    name: "",
                    artist: "",
                    cover: "",
                    source: "",
                    url: "",
                    favorited: true
                },
                {
                    name: "",
                    artist: "",
                    cover: "",
                    source: "",
                    url: "",
                    favorited: true
                },
                {
                    name: "",
                    artist: "",
                    cover: "",
                    source: "",
                    url: "",
                    favorited: true
                },
                {
                    name: "",
                    artist: "",
                    cover: "",
                    source: "",
                    url: "",
                    favorited: true
                },
                {
                    name: "",
                    artist: "",
                    cover: "",
                    source: "",
                    url: "",
                    favorited: true
                },
                {
                    name: "",
                    artist: "",
                    cover: "",
                    source: "",
                    url: "",
                    favorited: true
                },
                {
                    name: "",
                    artist: "",
                    cover: "",
                    source: "",
                    url: "",
                    favorited: true
                },
                {
                    name: "",
                    artist: "",
                    cover: "",
                    source: "",
                    url: "",
                    favorited: true
                },
                {
                    name: "",
                    artist: "",
                    cover: "",
                    source: "",
                    url: "",
                    favorited: true
                },
                {
                    name: "",
                    artist: "",
                    cover: "",
                    source: "",
                    url: "",
                    favorited: true
                },
                {
                    name: "",
                    artist: "",
                    cover: "",
                    source: "",
                    url: "",
                    favorited: true
                },
                {
                    name: "",
                    artist: "",
                    cover: "",
                    source: "",
                    url: "",
                    favorited: true
                },
                {
                    name: "",
                    artist: "",
                    cover: "",
                    source: "",
                    url: "",
                    favorited: true
                },
                {
                    name: "",
                    artist: "",
                    cover: "",
                    source: "",
                    url: "",
                    favorited: true
                },
                {
                    name: "",
                    artist: "",
                    cover: "",
                    source: "",
                    url: "",
                    favorited: true
                },
                {
                    name: "",
                    artist: "",
                    cover: "",
                    source: "",
                    url: "",
                    favorited: true
                },


            ],
            currentTrack: null,
            currentTrackIndex: 0,
            transitionName: null
        };
    },
    methods: {
        play() {
            if (this.audio.paused) {
                this.audio.play();
                this.isTimerPlaying = true;
            } else {
                this.audio.pause();
                this.isTimerPlaying = false;
            }
        },
        generateTime() {
            let width = (100 / this.audio.duration) * this.audio.currentTime;
            this.barWidth = width + "%";
            this.circleLeft = width + "%";
            let durmin = Math.floor(this.audio.duration / 60);
            let dursec = Math.floor(this.audio.duration - durmin * 60);
            let curmin = Math.floor(this.audio.currentTime / 60);
            let cursec = Math.floor(this.audio.currentTime - curmin * 60);
            if (durmin < 10) {
                durmin = "0" + durmin;
            }
            if (dursec < 10) {
                dursec = "0" + dursec;
            }
            if (curmin < 10) {
                curmin = "0" + curmin;
            }
            if (cursec < 10) {
                cursec = "0" + cursec;
            }
            this.duration = durmin + ":" + dursec;
            this.currentTime = curmin + ":" + cursec;
        },
        updateBar(x) {
            let progress = this.$refs.progress;
            let maxduration = this.audio.duration;
            let position = x - progress.offsetLeft;
            let percentage = (100 * position) / progress.offsetWidth;
            if (percentage > 100) {
                percentage = 100;
            }
            if (percentage < 0) {
                percentage = 0;
            }
            this.barWidth = percentage + "%";
            this.circleLeft = percentage + "%";
            this.audio.currentTime = (maxduration * percentage) / 100;
            this.audio.play();
        },
        clickProgress(e) {
            this.isTimerPlaying = true;
            this.audio.pause();
            this.updateBar(e.pageX);
        },
        prevTrack() {
            this.transitionName = "scale-in";
            this.isShowCover = false;
            if (this.currentTrackIndex > 0) {
                this.currentTrackIndex--;
            } else {
                this.currentTrackIndex = this.tracks.length - 1;
            }
            this.currentTrack = this.tracks[this.currentTrackIndex];
            this.resetPlayer();
        },
        nextTrack() {
            this.transitionName = "scale-out";
            this.isShowCover = false;
            if (this.currentTrackIndex < this.tracks.length - 1) {
                this.currentTrackIndex++;
            } else {
                this.currentTrackIndex = 0;
            }
            this.currentTrack = this.tracks[this.currentTrackIndex];
            this.resetPlayer();
        },
        resetPlayer() {
            this.barWidth = 0;
            this.circleLeft = 0;
            this.audio.currentTime = 0;
            this.audio.src = this.currentTrack.source;
            setTimeout(() => {
                if (this.isTimerPlaying) {
                    this.audio.play();
                } else {
                    this.audio.pause();
                }
            }, 300);
        },
        favorite() {
            this.tracks[this.currentTrackIndex].favorited = !this.tracks[
                this.currentTrackIndex
            ].favorited;
        }
    },
    created() {
        let vm = this;
        this.currentTrack = this.tracks[0];
        this.audio = new Audio();
        this.audio.src = this.currentTrack.source;
        this.audio.ontimeupdate = function() {
            vm.generateTime();
        };
        this.audio.onloadedmetadata = function() {
            vm.generateTime();
        };
        this.audio.onended = function() {
            vm.nextTrack();
            this.isTimerPlaying = true;
        };

        // this is optional (for preload covers)
        for (let index = 0; index < this.tracks.length; index++) {
            const element = this.tracks[index];
            let link = document.createElement('link');
            link.rel = "prefetch";
            link.href = element.cover;
            link.as = "image"
            document.head.appendChild(link)
        }
    }
});