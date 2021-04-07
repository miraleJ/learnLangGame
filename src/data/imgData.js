import boyOnTractor from '../images/boyOnTractor.jpg'
import playRoom from '../images/playRoom.jpg'

const imgData = [
    {
        title: 'boy on tractor',
        imageUrl: "",
        pic: boyOnTractor,
        tagsAndPlace: [
            {
                tagName: 'head',
                startC: [200,32],
                endC: [234,83]
            },
            {
                tagName: 'boot',
                startC: [110,190],
                endC: [170,234]
            }
            // more tags info
        ],
        id: 1, //??
    },
    {
        title: 'play room',
        imageUrl: "",
        pic: playRoom,
        tagsAndPlace: [
            {
                tagName: 'red car',
                startC: [67,234],
                endC: [82,244]
            },
            {
                tagName: 'map',
                startC: [63,7],
                endC: [196,98]
            },
            {
                tagName: 'chair',
                startC: [254,110],
                endC: [304,185]
            }
            // more tags info
        ],
        id: 1, //??
    },
    // more pictures
];

export default imgData;
