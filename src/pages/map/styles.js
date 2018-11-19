import { StyleSheet } from 'react-native';
import { general, metrics, colors} from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },


  modal:{
    backgroundColor:colors.darkTransparent,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  box:{
    height: 170,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
    marginHorizontal: metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center'
  },

  button1:{
    flex:1,
    backgroundColor: colors.cancel,
    borderRadius: metrics.baseRadius,
    marginRight:15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button2:{
    flex:1,
    backgroundColor: colors.confirm,
    borderRadius: metrics.baseRadius,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalTitle : {
    fontSize:18,
    color: "#333",
    marginBottom:metrics.baseMargin,
  },
  buttonContainer : {
    flexDirection:'row',
    height: 42,
    marginTop:metrics.baseMargin/2,
  },

  input:{
    flex:1,
    backgroundColor: '#DDD',
    borderRadius: metrics.baseRadius,
    height: 42,

  },

  inputContainer : {
    flexDirection:'row',
    height:44,
  },

  avatar : {
    width: 42,
    height: 42,
    borderRadius:50,
    borderColor:colors.white,
    borderWidth:0.5
  },

  errorMessage : {
    color: colors.danger
  },

  loading:{
    color: colors.darkTransparent
  }

});
export default styles;
