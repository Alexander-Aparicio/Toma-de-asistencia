const alumnosDb = [
        {
            name: "Alexander",
            surname:"Meza Roque",
            age:32,
            schedule:"A",
            paymentdate:15,
            gender:"masculino",
            id:"a01",
            state:"Ausente",
            foto:'https://images.generated.photos/6KZ8F057tL12nVCl3xBlTiO50H0pPJepeGgZd1-Aq7o/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODA0MjU0LmpwZw.jpg'
        },
        {
            name: "Angela",
            surname:"Sandoval Vera",
            age:30,
            schedule:"C",
            paymentdate:15,
            gender:"femenino",
            id:"a02",
            state:"Ausente",
            foto:"https://images.generated.photos/F5bZjxNx1e3D4-Kuv3Lf9_na0ZN972v4rhS2rVYXXs0/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDkwNDUwLmpwZw.jpg"
        },
        {
            name: "Hugo",
            surname:"Novoa Baca",
            age:32,
            schedule:"B",
            paymentdate:10,
            gender:"masculino",
            id:"a03",
            state:"Ausente",
            foto:'https://images.generated.photos/PmtW2DsAv5kVZJahiaXfOoqX7a3F3D5l9y7BbhzwUzg/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzQ2NjAwLmpwZw.jpg'
        },
        {
            name: "Gilberto",
            surname:"Peña Ruiz",
            age:35,
            schedule:"B",
            paymentdate:5,
            gender:"masculino",
            id:"a04",
            state:"Ausente",
            foto:'https://images.generated.photos/rP96leCS1l44_TdgnVnwcN2t11wJadEG2thlmue9V0c/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzQxMzY2LmpwZw.jpg'
        },
        {
            name: "Sonia",
            surname:"Alvares Aguilar",
            age:18,
            schedule:"A",
            paymentdate:19,
            gender:"femenino",
            id:"a05",
            state:"Ausente",            
            foto:'https://images.generated.photos/cS_0Vcm8iMUdbV2CGerbjzM7G-ebE1MOzAsPsiXAojI/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTQ3MTY2LmpwZw.jpg'
        },
        {
            name: "Jorge",
            surname:"Ramirez Alpeña",
            age:25,
            schedule:"C",
            paymentdate:25,
            gender:"masculino",
            id:"a06",
            state:"Ausente",
            foto:"https://images.generated.photos/P10OIdGYdI3ft42u0E-9GCvm75NdOsVPg2HHn9uyMVc/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjA3MzAzLmpwZw.jpg"
        },
        {
            name: "Angel",
            surname:"Meza Roque",
            age:32,
            schedule:"A",
            paymentdate:15,
            gender:"masculino",
            id:"a07",
            state:"Ausente",
            foto:'https://images.generated.photos/gmI0vhsV7UmMdqEzC6z_-UhQMtMRJXmlR-ePz4xOeHE/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODE5MTIzLmpwZw.jpg'
        },
        {
            name: "Ana",
            surname:"Meza Roque",
            age:32,
            schedule:"A",
            paymentdate:15,
            gender:"femenino",
            id:"a08",
            state:"Ausente",
            foto:'https://images.generated.photos/n01JE4YnZ5tmOIrpVpRYoIGwLgB8xrwTOnL3LxBtkB8/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTc3Mjk5LmpwZw.jpg'            
        },
        {
            name: "Brian",
            surname:"Meza Roque",
            age:32,
            schedule:"A",
            paymentdate:15,
            gender:"masculino",
            id:"a09",
            state:"Ausente",
            foto:'https://images.generated.photos/6AGS6BEYX9Gn9rOXu5eVQXeI4ll8_K2tFR7Up5H2DVY/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTIyMDg3LmpwZw.jpg'
        },
        {
            name: "Brenda",
            surname:"Meza Roque",
            age:32,
            schedule:"A",
            paymentdate:15,
            gender:"femenino",
            id:"a10",
            state:"Ausente",            
            foto:'https://images.generated.photos/EaSZKzOQNBmupqrG2b4blf0ALuRQI4OWOfQhtuoYA1k/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzY0MjExLmpwZw.jpg'
        },
        {
            name: "Carlos",
            surname:"Meza Roque",
            age:32,
            schedule:"A",
            paymentdate:15,
            gender:"masculino",
            id:"a11",
            state:"Ausente",
            foto:'https://images.generated.photos/KITnoN9rKkyWX2L6WHD_EMIcPcf2CSz22cpENPlbU7w/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTk3MzAyLmpwZw.jpg'
        },
        {
            name: "Cristian",
            surname:"Meza Roque",
            age:32,
            schedule:"A",
            paymentdate:15,
            gender:"masculino",
            id:"a12",
            state:"Ausente",
            foto:'https://images.generated.photos/QJMl5kDpUnX0_9UTeAx2vijusAgB1Ce6ju1VXS8FUQM/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDUyNjE2LmpwZw.jpg'
        },
        {
            name: "Carine",
            surname:"Meza Roque",
            age:32,
            schedule:"A",
            paymentdate:15,
            gender:"femenino",
            id:"a13",
            state:"Ausente",
            foto:'https://images.generated.photos/KxG1_xsUPorBFgbzzffSz80X9eiIqwYCbvl6yLShoQo/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Nzk0NTMyLmpwZw.jpg'
        },
        {
            name: "Celia",
            surname:"Meza Roque",
            age:32,
            schedule:"A",
            paymentdate:15,
            gender:"femenino",
            id:"a14",
            state:"Ausente",
            foto:'https://images.generated.photos/5fCcKYvgwpPLV5iPWYDDni1TwoPizvR_9FPon71rK68/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTUxMjk0LmpwZw.jpg'
        },
        {
            name: "Diego",
            surname:"Meza Roque",
            age:32,
            schedule:"A",
            paymentdate:15,
            gender:"masculino",
            id:"a15",
            state:"Ausente",
            foto:'https://images.generated.photos/xcnlZk409XkiLXOpcL2OG5WCzhD7gpJwDQGGgjJ2x00/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDQ4MDUwLmpwZw.jpg'
        },
        {
            name: "Diana",
            surname:"Meza Roque",
            age:32,
            schedule:"A",
            paymentdate:15,
            gender:"femenino",
            id:"a16",
            state:"Ausente",
            foto:'https://images.generated.photos/cPFMuNq_bJz5Z7NGebM3yPQ1JjEveZZzXW26XVV3R2c/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDMzMjE5LmpwZw.jpg'
        },
        {
            name: "Delia",
            surname:"Meza Roque",
            age:32,
            schedule:"A",
            paymentdate:15,
            gender:"femenino",
            id:"a17",
            state:"Ausente",
            foto:'https://images.generated.photos/jt2kjjDq64K-U3TZj6Khu9R5w3cJRql7JJxckk7uLHM/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDAwODQ2LmpwZw.jpg'
        },
        {
            name: "Emerson",
            surname:"Meza Roque",
            age:32,
            schedule:"A",
            paymentdate:15,
            gender:"masculino",
            id:"a18",
            state:"Ausente",
            foto:'https://images.generated.photos/bOgsmVbkcVtwQXQA2b6d2FDnhgAoCLm2_Jh-Hd1l7ZM/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTUwMDUxLmpwZw.jpg'
        },
        {
            name: "Ernesto",
            surname:"Meza Roque",
            age:32,
            schedule:"A",
            paymentdate:15,
            gender:"masculino",
            id:"a19",
            state:"Ausente",
            foto:'https://images.generated.photos/HE8b6VHzrQ1UOsJcAj_jejsS83ezu4J12TYan1Nf0xw/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjkxNDc2LmpwZw.jpg'
        },
        {
            name: "Erika",
            surname:"Meza Roque",
            age:32,
            schedule:"A",
            paymentdate:15,
            gender:"femenino",
            id:"a20",
            state:"Ausente",
            foto:'https://images.generated.photos/MaXPRDPUGHDTAuYOBri-8hQglNLtoD-G5APkMNKAbRg/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDE1OTMzLmpwZw.jpg'
        },

    ]

    export default alumnosDb