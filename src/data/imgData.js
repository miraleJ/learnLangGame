import boyOnTractor from '../images/boyOnTractor.jpg'

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
            }
            // more tags info
        ],
        id: 1, //??
    },
    // more pictures
];
console.log(imgData[0].picWidth);
export default imgData;
