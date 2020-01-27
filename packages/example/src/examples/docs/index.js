import React from 'react'
import { Router, Link as RouterLink } from '@reach/router'
import { ThemeProvider, Element, Grid, Column, Link, calc } from 'react-ui'

import * as Components from 'react-ui'
import AvatarDocs from './pages/avatar'
import BreadcrumbDocs from './pages/breadcrumb'
import ButtonDocs from './pages/button'
import './style.css'

const App = () => {
  return (
    <ThemeProvider>
      <Element
        as="header"
        css={{
          height: 12,
          borderBottom: '1px solid',
          borderColor: 'grays.200'
        }}
        marginBottom={12}
      >
        _
      </Element>

      <Grid css={{ maxWidth: 1024, marginX: 'auto', color: 'text.body' }}>
        <Column
          as="aside"
          span={[0, 0, 3]}
          css={{
            paddingLeft: 8,
            height: calc('100vh - 96px'), // space taken by header
            overflow: 'auto'
          }}
        >
          <NavSection
            items={[
              { title: 'Getting started', path: 'getting-started' },
              { title: 'Core concepts', path: 'core-concepts' },
              { title: 'Components', path: 'components' },
              { title: 'Screencasts', path: 'screencasts' }
            ]}
          />
          <Router>
            <GettingStarted path="getting-started/*" />
            <CoreConcepts path="core-concepts/*" />
            <ComponentNav path="components/*" />
          </Router>
        </Column>
        <Column
          as="main"
          span={[12, 12, 9]}
          css={{ paddingX: 16, paddingBottom: calc('16 * 2') }}
        >
          <Router>
            <Documentation path="components">
              <AvatarDocs path="Avatar" />
              <BreadcrumbDocs path="Breadcrumb" />
              <ButtonDocs path="Button" />
            </Documentation>
          </Router>
        </Column>
      </Grid>
    </ThemeProvider>
  )
}

export default App

const GettingStarted = () => {
  const items = [
    { title: 'Installation', path: 'installation' },
    { title: 'Using components', path: 'using-components' },
    { title: 'Customisation new building blocks', path: 'customisation' }
  ]

  return <NavSection items={items} />
}

const CoreConcepts = () => {
  const items = [
    { title: 'Token based design', path: 'tokens' },
    { title: 'Goals and scope', path: 'goals-scope' },
    { title: 'Create new building blocks', path: '' },
    { title: 'Creating new molecule components', path: '' },
    { title: 'Customising children', path: '' },
    { title: 'Credits', path: '' },
    { title: 'Utilities', path: '' }
  ]

  return <NavSection items={items} />
}

const ComponentNav = () => {
  const items = Object.keys(Components)
    .filter(name => !['merge', 'calc'].includes(name))
    .map(component => ({
      title: component,
      path: component
    }))

  return <NavSection items={items} />
}

const NavSection = ({ items }) => {
  return (
    <Element
      as="ul"
      marginTop={0}
      marginBottom={8}
      css={{
        listStyle: 'none',
        fontSize: 3,
        paddingLeft: 0,
        li: {
          paddingY: 2,
          color: 'text.subtle',
          ':hover': {
            color: 'text.body'
          }
        }
      }}
    >
      {items.map(item => (
        <li key={item.path}>
          <Link variant="subtle" as={RouterLink} to={item.path}>
            {item.title}
          </Link>
        </li>
      ))}
    </Element>
  )
}

const Documentation = props => props.children