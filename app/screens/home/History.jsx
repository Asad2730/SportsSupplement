import { FlashList } from '@shopify/flash-list';
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { getUserHistory } from '../../store/cart/cartApiRequest';

function History() {
    const user = useSelector((state)=>state.auth.user);
    const history = useSelector((state)=>state.cart.user_history);
    const error = useSelector((state)=>state.cart.error);
    const dispatch = useDispatch();
     
  useEffect(()=>{
    dispatch(getUserHistory(user.email))
    if(error !== null){
      console.log('Error:',error)
    }
  },[dispatch,history])

  console.log('history is...',history)

  return (
     <View>
        <Text>History...</Text>
     </View>
  )
}

export default History

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
});