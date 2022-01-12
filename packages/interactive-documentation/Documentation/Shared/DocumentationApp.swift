//
//  DocumentationApp.swift
//  Shared
//
//  Created by Jacob Sanders on 1/11/22.
//

import SwiftUI

@main
struct DocumentationApp: App {
    var body: some Scene {
        DocumentGroup(newDocument: DocumentationDocument()) { file in
            ContentView(document: file.$document)
        }
    }
}
