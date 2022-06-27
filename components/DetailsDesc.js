import { View, Text } from "react-native";
import React, { Fragment, useState } from "react";

import { ETHPrice, NFTTitle } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readmore, setReadmore] = useState(false);

  return (
    <Fragment>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />

        <ETHPrice price={data.price} />
      </View>
      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>
        <View style={{ marginTop: SIZES.font }}>
          <Text
            style={{
              fontSize: SIZES.small,
              color: COLORS.secondary,
              lineHeight: SIZES.large,
            }}
          >
            {text}
            {!readmore && "..."}
            <Text
              style={{
                fontFamily: FONTS.semiBold,
                fontSize: SIZES.font,
                color: COLORS.primary,
              }}
              onPress={() => {
                if (!readmore) {
                  setText(data.description);
                  setReadmore(true);
                } else {
                  setText(data.description.slice(0, 100));
                  setReadmore(false);
                }
              }}
            >
              {readmore ? "Show Less" : "Show More"}
            </Text>
          </Text>
        </View>
      </View>
    </Fragment>
  );
};

export default DetailsDesc;
