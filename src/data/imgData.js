import boyOnTractor from '../images/boyOnTractor.jpg'
import playRoom from '../images/playRoom.jpg'
import saloon from '../images/saloon.jpg'

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
    {
        title: 'saloon',
        imageUrl: "",
        pic: saloon,
        tagsAndPlace: [
            {
                tagName: 'tree',
                startC: [61,119],
                endC: [148,281]
            },
            {
                tagName: 'pillow',
                startC: [203,206],
                endC: [246,245]
            },
            {
                tagName: 'lamp',
                startC: [354,107],
                endC: [426,286]
            }
            // more tags info
        ],
        id: 1, //??
    },
    // more pictures
];

export default imgData;
