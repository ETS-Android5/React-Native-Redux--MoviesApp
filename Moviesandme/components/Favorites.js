// Components/Favorites.js

import React from 'react'
import { StyleSheet, Text,View } from 'react-native'
import FilmList from './FilmList'
import { connect } from 'react-redux'
import Avatar from "../components/Avatar";
class Favorites extends React.Component {

  render() {
    return (
      <View style={styles.main_contianer}>
     <View style={styles.avatar_container}>
       <Avatar/>
     </View>
      
     <FilmList films={this.props.favoritesFilm}
      navigation={this.props.navigation}
      favoriteList={true} // Ici on est bien dans le cas de la liste des films favoris.
      // Ce booléen à true permettra d'empêcher de lancer la recherche de plus de films après un scroll lorsqu'on est sur la vue Favoris.
   />
   </View>
      )
  }
}

const styles = StyleSheet.create({
    main_contianer: {
    flex:1
    },
    avatar_container:{
    alignItems:'center'
    }

})
const mapStatetoProps = state => {
  return{
    favoritesFilm : state.favoritesFilm
  }
}
export default connect(mapStatetoProps)(Favorites)