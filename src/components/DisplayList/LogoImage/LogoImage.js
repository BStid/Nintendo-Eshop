import React, { Component } from "react";
import "./LogoImage.css";

class LogoImage extends Component {
  constructor() {
    super();
    this.state = {
      image: ""
    };
  }
  componentDidMount() {
    switch (this.props.value) {
      case "Super Mario":
        this.setState({
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Mario_Series_Logo.svg/512px-Mario_Series_Logo.svg.png"
        });
        break;

      case "Yoshi's Woolly World":
        this.setState({
          image:
            "https://vignette.wikia.nocookie.net/nintendo/images/f/f6/Poochy_%26_Yoshi%27s_Woolly_World_logo.png/revision/latest?cb=20160902044814&path-prefix=en"
        });
        break;

      case "The Legend of Zelda":
        this.setState({
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Zelda_Logo.svg/1200px-Zelda_Logo.svg.png"
        });
        break;

      case "Breath of the Wild":
        this.setState({
          image:
            "https://upload.wikimedia.org/wikipedia/commons/a/ae/The_Legend_of_Zelda_Breath_of_the_Wild.svg"
        });
        break;

      case "Animal Crossing":
        this.setState({
          image:
            "http://www.stickpng.com/assets/thumbs/5b4a218cc051e602a568cd81.png"
        });
        break;

      case "Star Fox":
        this.setState({
          image:
            "https://vignette.wikia.nocookie.net/fantendo/images/7/74/StarFox_lOgO.png/revision/latest?cb=20140321224402"
        });
        break;

      case "Metroid":
        this.setState({
          image:
            "https://vignette.wikia.nocookie.net/metroid/images/f/ff/Metroid-logo-portada.png/revision/latest?cb=20150214173038&path-prefix=es"
        });
        break;

      case "F-Zero":
        this.setState({
          image:
            "https://vignette.wikia.nocookie.net/fantendo/images/f/f7/Fzero-logo.png/revision/latest?cb=20170219214753"
        });
        break;

      case "Pikmin":
        this.setState({
          image:
            "https://vignette.wikia.nocookie.net/logopedia/images/5/5f/Pikmin_logo.png/revision/latest?cb=20120612125928"
        });
        break;

      case "Punch Out":
        this.setState({
          image:
            "https://upload.wikimedia.org/wikipedia/en/b/be/Punch-Out%21%21_series_logo.png"
        });
        break;

      case "Wii Fit":
        this.setState({
          image:
            "https://i.pinimg.com/originals/e0/1c/16/e01c1621fc07289a13458bf0f7a3c46f.png"
        });
        break;

      case "Kid Icarus":
        this.setState({
          image:
            "https://vignette.wikia.nocookie.net/kidicarus/images/6/6c/Kid_Icarus_Smash_Logo.png/revision/latest?cb=20140904213038"
        });
        break;

      case "Mii":
        this.setState({
          image:
            "https://orig00.deviantart.net/7f88/f/2018/023/c/6/mii_logo___smashified_by_supercaptainn-dc0yomv.png"
        });
        break;

      case "Splatoon":
        this.setState({
          image:
            "https://vignette.wikia.nocookie.net/splatoon/images/4/4c/Logo-Splatoon_Wii_U_English.png/revision/latest?cb=20140613032133"
        });
        break;

      case "Pokemon":
        this.setState({
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png"
        });
        break;

      case "Kirby":
        this.setState({
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Kirby-Logo-New.svg/1024px-Kirby-Logo-New.svg.png"
        });
        break;

      case "Fire Emblem":
        this.setState({
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Fire_Emblem_logo.svg/2000px-Fire_Emblem_logo.svg.png"
        });
        break;

      case "Xenoblade":
        this.setState({
          image:
            "https://vignette.wikia.nocookie.net/xenoblade/images/b/bd/Xenoblade_series_logo.png/revision/latest?cb=20150708234134"
        });
        break;

      case "Earthbound":
        this.setState({
          image:
            "https://images.launchbox-app.com/88111f4f-6a9a-40c8-a58a-05f6a7adebf0.png"
        });
        break;

      case "Sonic":
        this.setState({
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/SEGA_logo.svg/1280px-SEGA_logo.svg.png"
        });
        break;

      case "Pac-man":
        this.setState({
          image:
            "https://i.pinimg.com/originals/b4/ee/c4/b4eec4d093adbe9d8a3cbb40d024836a.png"
        });
        break;

      case "Megaman":
        this.setState({
          image:
            "https://upload.wikimedia.org/wikipedia/commons/e/ef/Capcom_logo.svg"
        });
        break;

      case "Street fighter":
        this.setState({
          image:
            "https://vignette.wikia.nocookie.net/streetfighter/images/3/3e/SF_logo.png/revision/latest?cb=20130310140248"
        });
        break;

      case "Final Fantasy":
        this.setState({
          image:
            "https://logos-download.com/wp-content/uploads/2018/02/Final_Fantasy_logo_black.png"
        });
        break;

      default:
        this.setState({
          image: "https://mbtskoudsalg.com/images/nintendo-logo-png-black-6.png"
        });
    }
  }
  render() {
    return <img src={this.state.image} className="logo" alt="logo" />;
  }
}
export default LogoImage;
