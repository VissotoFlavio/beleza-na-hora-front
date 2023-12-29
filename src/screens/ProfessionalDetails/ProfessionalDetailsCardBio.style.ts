import { StyleSheet } from 'react-native';
import { StyleColorValues, StyleFont } from '../../theme';
import { StyleSpacing } from '../../theme/spacing.style';
import { StyleBorder } from './../../theme/border.style';

export const StyleProfessionalDetailsCardBio = StyleSheet.create({
  container: {
    ...StyleBorder.shadow,
    shadowColor: StyleColorValues.blue[500],
    elevation: 5,
    display: 'flex',
    borderRadius: StyleBorder.radius.lg,
    backgroundColor: StyleColorValues.white,
    paddingVertical: StyleSpacing.vertical['5xl'],
  },
  containerRating: {
    marginLeft: StyleSpacing.horizontal['5xl'],
    marginBottom: StyleSpacing.vertical.md,
  },
  containerNameExp: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: StyleSpacing.vertical.xl,
  },
  containerName: {
    flex: 3,
    display: 'flex',
    justifyContent: 'center',
    marginRight: StyleSpacing.horizontal['5xl'],
  },
  textName: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: StyleFont.size['3xl'],
    paddingLeft: StyleSpacing.horizontal['5xl'],
  },
  specialty: {
    paddingLeft: StyleSpacing.horizontal['5xl'],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: StyleColorValues.blue[300],
    backgroundColor: StyleColorValues.blue[100],
    borderTopRightRadius: StyleBorder.radius.full,
    borderBottomRightRadius: StyleBorder.radius.full,
    fontSize: StyleFont.size.lg,
  },
  containerExp: {
    flex: 2,
  },
  experience: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingRight: StyleSpacing.horizontal['5xl'],
    marginBottom: StyleSpacing.vertical.xs,
  },
  experienceValue: {
    flex: 3,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: StyleFont.size.md,
  },
  experienceText: {
    flex: 4,
    color: StyleColorValues.gray[400],
    fontSize: StyleFont.size.xs,
  },

  containerDescription: {
    paddingHorizontal: StyleSpacing.horizontal['5xl'],
  },
  description: {
    letterSpacing: 0.4,
  },
});
