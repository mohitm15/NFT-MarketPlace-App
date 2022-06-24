import { View, Text, Image } from 'react-native'
import React from 'react'
import { SIZES, FONTS, COLORS, SHADOWS, assets } from '../constants'

export const NFTTitle = () => {
  return (
    <View>
      <Text>NFTTitle</Text>
    </View>
  )
}

export const ETHPrice = () => {
  return (
    <View>
      <Text>ETHPrice</Text>
    </View>
  )
}

export const ImageCmp = ({imgUrl, index}) => {
  return (
    <Image source={imgUrl} resizeMode="contain" style={{ width:48, height:48, marginLeft: index === 0? 0: -SIZES.font}} />
  )
}

export const People = () => {
  return (
    <View  style={{flexDirection:'row'}}>
      {[assets.person02, assets.person03, assets.person04].map((imgUrl,index)=> (
        <ImageCmp imgUrl={imgUrl} index={index} key={`person-${index}`} />
      ))}
    </View>
  )
}

export const EndDate = () => {
  return (
    <View style={{paddingHorizontal:SIZES.font, paddingVertical:SIZES.base, backgroundColor:COLORS.white, justifyContent:'center', alignItems:'center',...SHADOWS.light, elevation:1, maxWidth:'50%'}}>
      <Text style={{ fontSize:SIZES.small, color:COLORS.primary}}>Ending IN</Text>
      <Text style={{fontFamily:FONTS.semiBold, fontSize:SIZES.medium, color:COLORS.primary}}>11h 12min</Text>
    </View>
  )
}
export const SubInfo = () => {
  return (
    <View style={{width:'100%' , paddingHorizontal:SIZES.font, marginTop:-SIZES.extraLarge,flexDirection:'row',justifyContent:'space-between'}}>
      <People />
      <EndDate />
    </View>
  )
}

