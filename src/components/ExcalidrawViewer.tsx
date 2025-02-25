import { Excalidraw, THEME } from '@excalidraw/excalidraw'
import type { ExcalidrawElement } from '@excalidraw/excalidraw/types/element/types'
import type { AppState } from '@excalidraw/excalidraw/types/types'

interface ExcalidrawViewerProps {
  elements?: ExcalidrawElement[]
}

const ExcalidrawViewer = ({ elements = [] }: ExcalidrawViewerProps) => {
  const appState: Partial<AppState> = {
    zenModeEnabled: true,
    viewModeEnabled: true,
    theme: THEME.LIGHT,
    viewBackgroundColor: '#1e1e2e',
    currentItemStrokeColor: '#f08c00',
    currentItemBackgroundColor: 'transparent',
    currentItemFillStyle: 'hachure',
    currentItemStrokeWidth: 4,
    currentItemStrokeStyle: 'solid',
    currentItemRoughness: 0,
    currentItemOpacity: 100,
    currentItemFontFamily: 1,
    currentItemFontSize: 20,
    currentItemTextAlign: 'left',
    currentItemStartArrowhead: null,
    currentItemEndArrowhead: 'arrow',
    currentItemArrowType: 'elbow',
    // scrollX: 912.5,
    // scrollY: 532.27734375,
    zoom: {
      value: 2,
    },
    currentItemRoundness: 'round',
    // gridSize: 20,
    // gridStep: 5,
    // gridModeEnabled: true,
    // gridColor: {
    //   Bold: 'rgba(60, 60, 92, 0.1)',
    //   Regular: 'rgba(50, 50, 77, 0.1)',
    // },
    currentStrokeOptions: {
      highlighter: false,
      hasOutline: false,
      outlineWidth: 0,
      constantPressure: false,
      options: {
        smoothing: 0.5,
        thinning: -1,
        streamline: 0.5,
        easing: 'linear',
        start: { taper: 5, cap: false, easing: 'linear' },
        end: { taper: 5, cap: false, easing: 'linear' },
      },
    },
    frameRendering: { enabled: true, clip: true, name: true, outline: true },
    objectsSnapModeEnabled: false,
  }

  return (
    <div style={{ height: '100vh', border: '1px solid #ddd' }}>
      <Excalidraw initialData={{ elements, appState, scrollToContent: true }} />
    </div>
  )
}

export default ExcalidrawViewer
