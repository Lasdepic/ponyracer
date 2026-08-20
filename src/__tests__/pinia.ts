import { config } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'

// Comme @pinia/testing fournit des stores « mockés », on configure Pinia
// une seule fois pour tous les tests, au même endroit où vue-router-mock
// configure le routeur factice (voir router-mock.ts).
//
// createTestingPinia() retourne une instance de Pinia dont les stores :
//  - sont initialisés avec un état VIDE (pas de localStorage),
//  - n'exécutent PAS leurs actions (les appels axios sont neutralisés).
const pinia = createTestingPinia()

// On enregistre cette Pinia comme plugin global de @vue/test-utils :
// n'importe quel composant monté dans un test utilisera automatiquement
// le store mocké, sans configuration supplémentaire.
config.global.plugins.push(pinia)
