import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList, Image } from 'react-native';


const musicData = [
  {data : [
    { key: "Kenku",
      desc: "Whatever their true origin, kenku are most often found in the Shadowfell and the Material Plane, and they tend to have the coloration typical of ravens.",
      traits: "Expert Duplication, Kenku Recall, Mimicry",
      img: "https://static.wikia.nocookie.net/forgottenrealms/images/b/b8/Kenku_5e.jpg/revision/latest/scale-to-width-down/1000?cb=20220407203219"
    },
    { key: "Tiefling",
      desc: "Tieflings are either born in the Lower Planes or have fiendish ancestors who originated there.",
      traits: "Darkvision, Fiendish Legacy, Otherworldly Presence",
      img: "https://static.wikia.nocookie.net/forgottenrealms/images/9/98/Tiefling_PHB5e.png/revision/latest?cb=20200308114310"
    },
    { key: "Dwarf",
      desc: "Dwarves were raised from the earth in the elder days by a deity of the forge.",
      traits: "Darkvision, Dwarven Resilience, Dwarven Toughness, Stonecunning",
      img: "https://static.wikia.nocookie.net/forgottenrealms/images/b/b6/Dwarf-5e.png/revision/latest?cb=20180814005205"
    },
    
  ],
  title: "Favourite DND Races",
  bg: '#e1ad4eff',
  icon: "eye"
  },
  {data : [
    { key: "Bard", 
      desc: "An Inspiring Performer of Music, Dance, and Magic",
      img: "https://www.dndbeyond.com/avatars/43940/760/638607457244101778.jpeg"},
    { key: "Warlock",
      desc: "An Occultist Empowered by Otherworldly Pacts" ,
      img: "https://www.dndbeyond.com/avatars/43940/890/638607460049450769.jpeg"},
    { key: "Rogue",
      desc: "A Dexterous Expert in Stealth and Subterfuge" ,
      img: "https://www.dndbeyond.com/avatars/43940/853/638607459373183811.jpeg"},
  ],
  title: "Favourite Classes",
  bg: "#e1ad4eff",
  icon: "water"
  }
]

const renderList = (e) => {
  var item = e.item;
  var isClass = item.traits == undefined;
  if (isClass){
    return  (<View style={styles.listContainer}>
              <Text style={styles.title}>{item.key}</Text>
              <View style={styles.seperator}></View>
              <Text>{item.desc}</Text>
              <View style={styles.centerchildren}>
              <Image source={{uri: item.img}} style={styles.imageclass}
              />  
              </View>
            </View>
            )
  } else {
    return  (<View style={[styles.listContainer, styles.racecontainer]}>
              
              <Text style={styles.title}>{item.key}</Text>
              <View style={styles.seperator}></View>
              <Text style={styles.traittext}><Text style={styles.bold}>Traits:</Text> {item.traits}</Text>
              <Text>{item.desc}</Text>
              <View style={styles.centerchildren}>
                <Image source={{uri: item.img}} style={styles.imagerace} 
                /> 
              </View>
              
            </View>
            )
  }
  
}

export default function App() {
  return (
    <View style={styles.container}>
      <SectionList style={styles.list} sections={musicData} renderItem={renderList}
        renderSectionHeader={({section:{title, bg, icon}})=>(
        <View style={[{flexDirection: "row", justifyContent: "center", backgroundColor: bg}, styles.header]}>
          <Text style={styles.headerText} >{title}</Text>
        </View>
      )}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cbc5aeff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    margin: 20
  },
  title: {
    fontSize: 20,
  },
  imageclass: {
    width: 150,
    height: 150,
    borderRadius: 30
  },
  imagerace:{
    width: 250,
    height: 300,
    resizeMode: "contain",
    alignSelf: "center"
  },
  listContainer : {
    borderWidth: 2,
    borderStyle: "dashed" ,
    padding: 20,
    
  },
  racecontainer: {
  },
  headerText: {
    fontSize: 25,
    margin: 20,
  },
  traittext: {
    fontStyle: "italic"
  },
  centerchildren: {
    alignItems: "center"
  },
  seperator: {
    borderBottomWidth: 2,
    marginBottom: 15,
    marginTop: 5
  }
});
