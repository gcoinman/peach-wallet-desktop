import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { analytics } from "additional";
import { accountOperations } from "modules/account";
import { WalletPath } from "routes";
import Modal from "components/modal";

class ForceLogout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            processing: this.props.isLogouting || false,
        };

        analytics.pageview(`${WalletPath}/force-logout`, "Error. Force logout");
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isLogouting !== this.props.isLogouting) {
            this.setState({
                processing: nextProps.isLogouting || false,
            });
        }
    }

    onClose = () => {
        const { dispatch } = this.props;
        if (this.state.processing) {
            return;
        }
        analytics.event({ action: "Force Logout Modal", category: "Wallet", label: "Force Logout" });
        dispatch(accountOperations.logout());
    };

    render() {
        return (
            <Modal
                title="Some problem acquired"
                onClose={this.onClose}
                styleSet="error"
                showCloseButton
                disabled={this.state.processing}
            >
                <div className="modal-body modal-body-bottom30 text-left text-16">
                    <div className="row">
                        <div className="col-xs-12 modal-body__error-message">
                            {this.props.forceLogoutError}
                        </div>
                        <div className="col-xs-12">
                            Please log in again
                        </div>
                    </div>
                </div>
                <div className="modal-footer text-right">
                    <div className="row">
                        <div className="col-xs-12">
                            <button
                                type="button"
                                className="button button__scarlett-two"
                                onClick={this.onClose}
                                disabled={this.state.processing}
                            >
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}

ForceLogout.propTypes = {
    dispatch: PropTypes.func.isRequired,
    forceLogoutError: PropTypes.string,
    isLogouting: PropTypes.bool,
};

const mapStateToProps = state => ({
    forceLogoutError: state.app.forceLogoutError,
    isLogouting: state.account.isLogouting,
});

export default connect(mapStateToProps)(ForceLogout);
