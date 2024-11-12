import React from 'react';
import {Button, CloseButton, FormFieldGroup, Popover, TextInput, View} from "@instructure/ui";


export class PopoverSample extends React.Component {

    state = {
        isShowingContent: false
    }

    renderCloseButton () {
        return (
            <CloseButton
                placement="end"
                offset="small"
                onClick={() => this.setState({ isShowingContent: false })}
                screenReaderLabel="Close"
            />
        )
    }

    render () {
        return (
            <View>
                <Popover
                    renderTrigger={<Button>Guest app -- open Popover</Button>}
                    isShowingContent={this.state.isShowingContent}
                    onShowContent={(e) => {
                        this.setState({ isShowingContent: true })
                    }}
                    onHideContent={(e, { _documentClick }) => {
                        this.setState({ isShowingContent: false })
                    }}
                    on="click"
                    screenReaderLabel="Popover Dialog Example"
                    shouldContainFocus
                    shouldReturnFocus
                    shouldCloseOnDocumentClick
                    offsetY="16px"
                    //mountNode={() => document.getElementById('main')}
                >
                    <View padding="medium" display="block" as="form">
                        {this.renderCloseButton()}
                        <FormFieldGroup description="Log In">
                            <TextInput renderLabel="Username" inputRef={
                                (el) => {
                                    if (el) {
                                        this._username = el
                                    }
                                }}/>
                            <TextInput renderLabel="Password" type="password" />
                        </FormFieldGroup>
                    </View>
                </Popover>
            </View>
        )
    }
}
