import styled from 'styled-components'

import { colors } from 'src/components/theme'

import * as Types from './article.types';

export const Article = styled.article<{ width?: string, variant?: Types.ArticleVariant }>`
  width: ${props => props.width || '30%'};
  padding: 38px 30px 30px 30px;
  border: 1px solid #8D8BA7;
  border-radius: 24px;
  margin: 12.5px 20px 12.5px 20px;
  display: flex;
  flex-direction: column;

  &:nth-child(3n) {
    margin-right: 0;
  }

  &:hover {
    background: ${props => props.variant === 'secondary' ? '#F3F3F3' : '#88F6DD'};
  }
`

export const Title = styled.h3`
  line-height: 38px;
  font-size: 28px;
  font-weight: 600;
  margin: 0;
`

export const SubTitle = styled.p`
  margin-top: 10px;
  line-height: 30px;
  font-size: 18px;
  font-weight: 400;
  flex-grow: 2;
  color: ${colors.brandDark};
`

export const Link = styled.a<{ variant: Types.ArticleVariant }>`
  width: fit-content;
  display: inline-flex;
  line-height: 18px;
  font-size: 18px;
  font-weight: 600;
  background-color: ${props => props.variant === 'secondary' ? 'transparent' : colors.brandLight};
  text-decoration: none;
  border-radius: 35px;
  padding: 15px;
  margin-left: -15px;
  cursor: pointer;
`

export const LinkIcon = styled.img`
  margin-left: 7px;
`