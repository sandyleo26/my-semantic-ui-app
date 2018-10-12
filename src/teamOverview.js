import React from 'react';
import {
  Breadcrumb,
  Container,
  Menu,
  Label,
  Grid,
  Sidebar,
  Segment,
  Icon,
  Header,
  Image,
  Dropdown,
  Search,
  Input,
  GridColumn,
  Table,
} from 'semantic-ui-react'



const BreadcrumbExampleDivider = () => (
  <Breadcrumb>
    <Breadcrumb.Section link>Snug</Breadcrumb.Section>
    <Breadcrumb.Divider icon='right angle' />
    <Breadcrumb.Section link>Overview</Breadcrumb.Section>
  </Breadcrumb>
)

const statusOptions = [
  {
    text: 'Any (Non-archived)',
    value: 'Any (Non-archived)',
  },
  {
    text: 'Draft',
    value: 'Draft',
  },
  {
    text: 'Leased',
    value: 'Leased',
  },
];

class TeamOverview extends React.Component {
  render() {
    return (
      <div>
        <Menu>
          <Menu.Item as='a'>My Home</Menu.Item>
          <Menu.Item as='a'>My Portfolio</Menu.Item>
          <Dropdown item text='My Teams'>
            <Dropdown.Menu>
              <Dropdown.Item>Sha Corp</Dropdown.Item>
              <Dropdown.Item>Snug</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item as='a'>My Help</Menu.Item>
        </Menu>

        {/* <Menu vertical text fixed='left'>
          <Menu.Item as='a'>Application<Label color='teal'>4</Label></Menu.Item>
          <Menu.Item as='a'>Viewing<Label color='teal'>20</Label></Menu.Item>
        </Menu> */}

        <Container style={{ marginTop: '3em' }}>

          <Container style={{ marginBottom: '3em' }}>
            <BreadcrumbExampleDivider />
          </Container>


          <Grid columns={2}>
            <Grid.Column>
              <Input icon='search' fluid placeholder='Search...' />
            </Grid.Column>

            <Grid.Column>
              <Dropdown placeholder='Select Status' selection fluid options={statusOptions} />
            </Grid.Column>
          </Grid>

          <Container style={{ marginTop: '3em' }}>

            <Table>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell textAlign='center'>Property</Table.HeaderCell>
                  <Table.HeaderCell textAlign='center'>Days</Table.HeaderCell>
                  <Table.HeaderCell textAlign='center'>Messages</Table.HeaderCell>
                  <Table.HeaderCell textAlign='center'>Viewings</Table.HeaderCell>
                  <Table.HeaderCell textAlign='center'>EOI</Table.HeaderCell>
                  <Table.HeaderCell textAlign='center'>Applications</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {[1,2,3].map((index) => <Table.Row key={index}>
                  <Table.Cell>
                    <Grid columns={2}>
                      <Grid.Column>
                        <Image size='small' src={process.env.PUBLIC_URL + '/images/apt1.jpg'} />
                      </Grid.Column>
                      <Grid.Column>
                        <Header>
                          <Header.Content>
                            <Header.Subheader>1 Bland St</Header.Subheader>
                            <Header.Subheader>Rent: $1000 / week</Header.Subheader>
                            <Header.Subheader>Avail: Thu 27 Sep</Header.Subheader>
                          </Header.Content>
                        </Header>
                      </Grid.Column>
                    </Grid>
                  </Table.Cell>

                  {/* Days */}
                  <Table.Cell textAlign='center'>
                    -
                  </Table.Cell>

                  {/* Messages */}
                  <Table.Cell textAlign='center'>
                    0
                  </Table.Cell>

                  {/* Viewings */}
                  <Table.Cell textAlign='center'>
                    1
                  </Table.Cell>

                  {/* EOI */}
                  <Table.Cell textAlign='center'>
                    1
                  </Table.Cell>

                  {/* Applications */}
                  <Table.Cell textAlign='center'>
                    2
                  </Table.Cell>

                </Table.Row>)

                }

              </Table.Body>

            </Table>
          </Container>

        </Container>
      </div>
    );
  }
}

export default TeamOverview;
