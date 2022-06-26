import React, { Fragment } from "react";
import {
  Text,
  View,
  StatusBar,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import {
  DetailsBid,
  SubInfo,
  CircleButton,
  RectButton,
  DetailsDesc,
} from "../components";
import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";

const DetailsHeader = ({ data, navigation }) => {
  return (
    <View style={{ width: "100%", height: 373 }}>
      <Image
        source={data.image}
        style={{ width: "100%", height: "100%" }}
        resizeMode="cover"
      />

      <CircleButton
        imgUrl={assets.left}
        handlePress={() => navigation.goBack()}
        left={15}
        top={StatusBar.currentHeight + 10}
      />

      <CircleButton
        imgUrl={assets.heart}
        right={15}
        top={StatusBar.currentHeight + 10}
      />
    </View>
  );
};

const Details = ({ route, navigation }) => {
  const { data } = route.params;

  //console.log("-------------------",data,"------------------")
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View
        style={{
          width: "100%",
          bottom: 0,
          paddingVertical: SIZES.font,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgb(255,255,255,0.5)",
          zIndex: 1,
          position: "absolute",
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>
      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />
              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: SIZES.font,
                    color: COLORS.primary,
                  }}
                >
                  Current Bid
                </Text>
              )}
            </View>
          </Fragment>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;
