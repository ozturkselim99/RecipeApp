import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet, ViewPropTypes} from 'react-native';
import Button from './Button';
import PropTypes from 'prop-types';
import theme from '../utils/Theme';
import Text from './Text';

class TagSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      overflowed: false,
      tagsSelected: [],
    };
  }

  onTagSelected = (key) => {
    if (this.props.multiple) {
      const tagsSelected = this.state.tagsSelected.includes(key)
        ? this.state.tagsSelected.filter((i) => i !== key)
        : [...this.state.tagsSelected, key];
      this.setState({tagsSelected: tagsSelected});
      this.props.onChange(tagsSelected);
    } else {
      this.setState({tagsSelected: [key]});
      this.props.onChange([key]);
    }
  };

  renderTag = (tag) => {
    const {maxHeight} = this.props;
    return (
      <Button
        bg={
          this.state.tagsSelected.includes(tag.id)
            ? theme.colors.mainGreen
            : theme.colors.mainGray
        }
        px="24px"
        py="15px"
        mx={5}
        mb={5}
        borderRadius={theme.radii.button}
        onPress={() => this.onTagSelected(tag.id)}
        key={tag.id}
        onLayout={maxHeight > 0 ? this.onLayoutTag : () => {}}>
        <Text
          color={
            this.state.tagsSelected.includes(tag.id)
              ? 'white'
              : theme.colors.mainText
          }
          fontSize="15px">
          {tag.title}
        </Text>
      </Button>
    );
  };

  onExpand = () => {
    this.setState({expanded: !this.state.expanded});
  };

  onLayoutTag = (event) => {
    const {y} = event.nativeEvent.layout;
    if (!this.state.overflowed && y > this.props.maxHeight) {
      this.setState({overflowed: true});
    }
  };

  render() {
    const {
      maxHeight,
      containerStyle,
      expdandedContainerStyle,
      expandCaptions,
      separatorStyle,
      expandBtnStyle,
      expandTextStyle,
    } = this.props;
    return (
      <View>
        <View
          style={
            this.state.expanded
              ? expdandedContainerStyle
              : [
                  containerStyle,
                  maxHeight > 0 ? {maxHeight: this.props.maxHeight} : {},
                ]
          }>
          {this.props.tags.map((i) => this.renderTag(i))}
        </View>
        {this.state.overflowed ? (
          <View style={separatorStyle}>
            <TouchableOpacity style={expandBtnStyle} onPress={this.onExpand}>
              <Text style={expandTextStyle}>
                {this.state.expanded ? expandCaptions[1] : expandCaptions[0]}
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    );
  }
}

TagSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  maxHeight: PropTypes.number,
  tags: PropTypes.array.isRequired,
  expandCaptions: PropTypes.array,
  expdandedContainerStyle: ViewPropTypes.style,
  containerStyle: ViewPropTypes.style,
  separatorStyle: ViewPropTypes.style,
  expandBtnStyle: ViewPropTypes.style,
  multiple: PropTypes.bool,
};

const styles = StyleSheet.create({
  btnText: {
    fontSize: 12,
    textAlign: 'right',
    padding: 0,
  },
  btnStyle: {
    height: 25,
    justifyContent: 'flex-start',
    alignSelf: 'flex-end',
  },
  showMore: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: 'grey',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'hidden',
  },
  containerExpanded: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: '700',
    paddingBottom: 8,
    paddingTop: 8,
    paddingLeft: 16,
    paddingRight: 16,
    height: 32,
    margin: 11,
    backgroundColor: '#EBF1FD',
  },
  tagSelected: {
    alignSelf: 'center',
    fontSize: 12,
    paddingBottom: 8,
    paddingTop: 8,
    paddingLeft: 16,
    paddingRight: 16,
    height: 32,
    margin: 11,
    color: 'white',
    backgroundColor: '#6242f4',
  },
});

TagSelector.defaultProps = {
  multiple: false,
  expandCaptions: ['more', 'less'],
  expdandedContainerStyle: styles.containerExpanded,
  containerStyle: styles.container,
  separatorStyle: styles.showMore,
  expandBtnStyle: styles.btnStyle,
  maxHeight: 0,
};

export default TagSelector;
