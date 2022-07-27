import { Component, ReactNode } from "react";

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
    state: ErrorBoundaryState = {
        hasError: false,
    };

    constructor(props: any) {
        super(props);
        console.log("instantiating a new ErrorBoundary");
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        console.log("error", this.state.hasError);
        if (this.state.hasError) {
            return (
                <MiniPage>
                    <div>oh snap</div>;
                </MiniPage>
            );
        }

        return this.props.children;
    }
}

const MiniPage = ({ children }: { children: any }) => <ErrorBoundary>{children}</ErrorBoundary>;

export default function Demo() {
    return <MiniPage>{Date.now()}</MiniPage>;
}
