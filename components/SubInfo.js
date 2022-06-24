import { View, Text, Image } from 'react-native'
import React from 'react'
import { SIZES, FONTS, COLORS, SHADOWS, assets } from '../constants'

export const NFTTitle = ({title, subTitle, titleSize, subTitleSize}) => {
  return (
    <View style={{}}>
      <Text style={{fontFamily:FONTS.semiBold, color:COLORS.primary, fontSize:titleSize}}>{title}</Text>
      <Text style={{ color:COLORS.primary, fontSize:subTitleSize}}>{subTitle}</Text>
    </View>
  )
}

export const ETHPrice = ({price}) => {
  return (
    <View style={{flexDirection:'row',alignItems:'center'}}>
      <Image source={assets.eth} resizeMode="contain" style={{width:20, height:20, marginRight:2}} />
      <Text style={{fontSize:SIZES.font, color:COLORS.primary, fontFamily:FONTS.medium}}>{price}</Text>
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
    <View style={{paddingHorizontal:SIZES.font, paddingVertical:SIZES.base, backgroundColor:COLORS.white, justifyContent:'center', alignItems:'center',...SHADOWS.light, elevation:1, maxWidth:'50%',borderColor:COLORS.gray,borderWidth:1}}>
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

