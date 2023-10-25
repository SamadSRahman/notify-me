import React from 'react'
import styles from './Templates.module.css'
import { Page } from '@shopify/polaris'

export default function Templates() {
  return (
    <div>
      <Page title='Templates'>
        <div className={styles.container}>
        <Text as="h1" variant="headingXl">
                Firebase Server Key
              </Text>
        </div>
      </Page>
    </div>
  )
}
