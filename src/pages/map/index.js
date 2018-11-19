import React, {Component} from 'react';
import {Text, View, Modal, ActivityIndicator,TouchableOpacity, TextInput, Image} from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import api from 'services/api'
import styles from './styles'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActions from 'store/actions/users';
import PropTypes from 'prop-types';

MapboxGL.setAccessToken('pk.eyJ1IjoibWF0aGV1c2RhZXVibGUiLCJhIjoiY2pvajFlaTg2MDBmYTNxb2Z1NDFoOGhmNCJ9.bOqUlplJXkPeIyuz661Vjw');

 class Map extends Component {

  state = {
    lastClickCoordinates:[null, null],
    username:"",
  };

  static propTypes = {
    addUserRequest: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
    error: PropTypes.oneOfType([null, PropTypes.string]),
    modal: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
  }

  onPress = (e) => {
    this.setState({lastClickCoordinates: e.geometry.coordinates})
    this.updateModal()
  }

  updateModal = () => {
    this.props.updateModal(!this.props.modal)
  }

  createAnnotation = async () => {
    await this.props.addUserRequest(this.state.username, this.state.lastClickCoordinates)
    this.setState({ username: '' })
  }

  renderAnnotations() {
    return (
      this.props.users.map(user => (
        <MapboxGL.PointAnnotation
        id={user.user.login}
        coordinate={user.coordinates}
        key={user.user.id}
      >
      <Image source={{uri: user.user.avatar_url}}  style={styles.avatar}/>
        <MapboxGL.Callout title={ (user.user.name===null ? '(Sem nome)' : user.user.name) + "\n\n" + (user.user.bio===null ?  '(Sem biografia)' : user.user.bio)}/>
      </MapboxGL.PointAnnotation>
      ))
    )
  }

  renderModal (){
    return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={this.props.modal}
    onRequestClose={this.updateModal}>
    <View style={styles.modal}>
      <View style={styles.box}>
        <Text style={styles.modalTitle}>Adicionar um novo local</Text>
        {!!this.props.error &&
          <Text style={styles.errorMessage}>{this.props.error}</Text>
        }
        <View style={styles.inputContainer}>
        <TextInput
            style={styles.input}
            autoCapitalize='none'
            autoCorrect={false}
            placeholder=' Usuario do Github'
            underlineColorAndroid='rgba(0, 0, 0, 0)'
            value={this.state.username}
            onChangeText={ username => this.setState({ username }) }
          />
          </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button1} onPress={this.updateModal}>
            <Text>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={this.createAnnotation}>
            {this.props.loading ?
              <ActivityIndicator size="small" color={styles.loading.color}/>
              :<Text>Salvar</Text>
            }
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>  )
  }

  render() {
    return (
      <View style={styles.container}>
        <MapboxGL.MapView
          onLongPress={this.onPress}
          ref={(c) => (this._map = c)}
          centerCoordinate={[-49.6446024, -27.2108001]}
          style={styles.map}
          showUserLocation
          styleURL={MapboxGL.StyleURL.Dark}
        >
        {this.renderAnnotations()}

        </MapboxGL.MapView>
        {this.renderModal()}
      </View>
    );
  }
}


const mapStateToProps = state => ({
  users: state.users.data,
  error: state.users.error,
  loading:state.users.loading,
  modal: state.users.modal,
})
const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps) (Map)
