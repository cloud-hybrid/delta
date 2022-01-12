//
//  ContentView.swift
//  Shared
//
//  Created by Jacob Sanders on 1/11/22.
//

import SwiftUI

struct ContentView: View {
    @Binding var document: DocumentationDocument

    var body: some View {
        TextEditor(text: $document.text)
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView(document: .constant(DocumentationDocument()))
    }
}
