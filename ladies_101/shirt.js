function setup() {
	var shirt = document.getElementById("shirt");
	var ctx = shirt.getContext("2d");
	var hot = document.getElementById("hot");

	ctx.fillStyle = "#000";
	ctx.fillRect(0, 0, shirt.width, shirt.height);
	ctx.drawImage(hot, -129, -75, 720, 720);

	Head = function(mouthId, voiceId, mouthSync) {
		this.mOpen = document.getElementById(mouthId);

		this.mClosed = document.getElementById(mouthId+"_2");

		this.voice = document.getElementById(voiceId);

		this.sync = mouthSync;

		this.timeoutIds = [];

		this.talk = function(id) {
			var face = ethanData[id-1];
			for (var i = 0; i < this.timeoutIds.length; i++) {
				clearTimeout(this.timeoutIds[i]);
			}
			this.timeoutIds = [];

			this.voice.currentTime = 0;
			this.voice.play();

			var open = this.sync[0];

			function img() {
				open = !open;
				var image = open? face.mOpen: face.mClosed;
				ctx.drawImage(image, 0, 0);
			}

			for (var i = 1; i < this.sync.length; i++) {
				this.timeoutIds.push(setTimeout(img, this.sync[i]));
			}
		}
	}

	ethanData = [
		new Head("m1", "v1", [false,51,197,223,284,314,665,772,999,1074,1210,1259,1378,1395,1465,1518,1576,1605,1864]),
		new Head("m2", "v2", [false,144,870,1275,1784]),
		new Head("m3", "v3", [false,63,236,397,620,777,2039]),
		new Head("m4", "v4", [false,52,363,647,787,927,1030,1056,1979]),
		new Head("m5", "v5", [false,54,669,877,1466]),
		new Head("m6", "v6", [false,50,384]),
		new Head("m7", "v7", [false,51,189,210,369,405,481,540,718,782,872,917,1003,1137,1357,1434,1730]),
		new Head("m8", "v8", [false,104,198,235,357,397,511,543,665,794,1039,1120,1228,1255,1328,1376,1556,1701,1939,2387,2657,2875,2953,2996,3110,3176,3271,3312,3404,3511,3666,3822,3967]),
		new Head("m9", "v9", [false,55,178,200,277,289,496,608,661,725,842,983,1144,1170,1229,1280,1388,1419,1713,1747,1805,1835,1956,1965,2131,2143,2260,2304,2354,2366,2524,2540,2611,2669,2906,2954,3064,3088,3194,3228,3282,3315,3398,3441,3507,3624,3740,3798,3978])
	];

	talk = function(id) {
		ethanData[id-1].talk(id);
	}
}

window.onload = function() {
	setup();
	_gaq.push(["_setCustomVar", 1, "ScreenResolution", String(screen.width)+"x"+String(screen.height), 1]);
}