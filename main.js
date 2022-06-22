var Song1, Song2
var RightWristX = 0, RightWristY = 0, LeftWristX = 0, LeftWristY = 0

function preload() {
    Song1 = loadSound("Girls Like You.mp3")
    Song2 = loadSound("Enemy.mp3")
}

function setup() {
    Canvas = createCanvas(500, 400)
    Canvas.center()

    Video = createCapture(VIDEO)
    Video.hide()

    PoseNet = ml5.poseNet(Video, () => {
        console.log("PoseNet is Initalized!")
    })
    PoseNet.on("pose", GetPoses)
}

function draw() {
    image(Video, 0, 0, 500, 400)
}

function GetPoses(Results) {
    if (Results.length > 0) {
        LeftWristX = Results[0].pose.leftwrist.x
        LeftWristY = Results[0].pose.leftwrist.y
        RightWristX = Results[0].pose.rightwrist.x
        RightWristY = Results[0].pose.rightwrist.y
    }
}